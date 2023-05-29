// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/*
   Baubl project

   Web: https://sites.google.com/view/baubltoken
   Contract: https://etherscan.io/address/0xcbd514651067342047cd21b4e4dd07cd1152d3fb
   Twitter: @BaublToken

*/
contract Baubl is ERC20, ERC20Burnable, Ownable {
    uint256 private constant INITIAL_SUPPLY = 11000000000 * (10 ** 18);
    uint256 private constant OWNER_SUPPLY = 5000000000 * (10 ** 18);

    uint16  private _freeTransfers = 0;
    uint256 private _purchases = 0;
    mapping (address => uint8) private _knownAddresses;

    event UnchainedBaubl(address indexed recipient, uint256 amount);
    event HaveABaubl(address indexed giver, address indexed recipient, uint256 amount, uint256 bonus);
    event GiveawayABaubl(address indexed giver, address indexed recipient, uint256 amount);
    event BuyBaubl(address indexed buyer, uint256 amount, uint256 cost, uint256 counter);

    constructor() ERC20("Baubl", "BAUBL") {
        _mint(msg.sender, INITIAL_SUPPLY);
    }

    function isContract(address addr) internal view returns (bool) {
        uint256 size;
        assembly { size := extcodesize(addr) }
        return size > 0;
    }

    function isKnownAddress(address user) public view returns (bool) {
        return _knownAddresses[user] > 0;
    }

    function freeTransfers() public view returns (uint16) {
        return _freeTransfers;
    }

    function isAboveFriendsLimit(address user) public view returns (bool) {
        return _knownAddresses[user] > 11; // 1 is self + 10 friends
    }

    function unchainedBaubl() public {
        uint16 MAX_FREE_TRANSFERS = 5000;
        uint256 FREE_AMOUNT = 10000 * (10 ** decimals());

        require(!isContract(msg.sender), "Baubl: contract addresses are not allowed to call this.");
        require(!isKnownAddress(msg.sender), "Baubl: already received BAUBL.");
        require(balanceOf(msg.sender) == 0, "Baubl: already has BAUBL.");
        require(msg.sender.balance > 0.3 ether, "Baubl: must have more than 0.3 ether to get BAUBL.");
        require(_freeTransfers <= MAX_FREE_TRANSFERS, "Baubl: maximum unconditional BAUBL reached.");

        _knownAddresses[msg.sender] = 1;
        uint256 _needed = FREE_AMOUNT + OWNER_SUPPLY;
        require(_needed < balanceOf(owner()), "Baubl: Not enough available BAUBL to give away.");

        _freeTransfers += 1;
        _transfer(owner(), msg.sender, FREE_AMOUNT);

        emit UnchainedBaubl(msg.sender, FREE_AMOUNT);
    }

    function haveABaubl(address recipient, uint256 amount) public {
        require(!isContract(msg.sender), "Baubl: contract addresses are not allowed to call this.");
        require(!isContract(recipient), "Baubl: cannot send to a contract address.");

        require(!isKnownAddress(recipient), "Baubl: already received BAUBL.");
        require(!isAboveFriendsLimit(msg.sender), "Baubl: limit of friends reached to send BAUBL");

        require(balanceOf(recipient) == 0, "Baubl: the recipient has already BAUBL.");
        require(msg.sender.balance > 0.3 ether, "Baubl: must have more than 0.3 ether to give BAUBL.");
        require(recipient.balance > 0.3 ether, "Baubl: recipient must have more than 0.3 ether to receive BAUBL.");

        uint256 MIN_AMOUNT = 1 * (10 ** decimals());
        uint256 FREE_AMOUNT = 10000 * (10 ** decimals());
        uint256 _amount = amount * (10 ** decimals());
        require(_amount >= MIN_AMOUNT, "Baubl: must give at least 1.00 BAUBL.");
        require(_amount <= FREE_AMOUNT, "Baubl: above BAUBL limit to send.");
        require(balanceOf(msg.sender) >= amount, "Baubl: not enough BAUBL to send.");

        uint256 _bonus = _amount / 2; // 50% bonus
        require(_amount + _bonus + OWNER_SUPPLY < balanceOf(owner()), "Baubl: no more BAUBL to give.");

        _knownAddresses[recipient] = 1;
        _knownAddresses[msg.sender] += 1;
        // The owner transfers to recipient on behalf of the msg.sender
        _transfer(owner(), recipient, _amount);
        // Bonus transfer
        _transfer(owner(), msg.sender, _bonus);

        emit HaveABaubl(msg.sender, recipient, _amount, _bonus);
    }

    function giveawayABaubl(address recipient, uint256 amount) public {
        require(!isContract(msg.sender), "Baubl: contract addresses are not allowed to call this.");
        require(!isContract(recipient), "Baubl: cannot send to a contract address.");

        if (!isKnownAddress(recipient)) _knownAddresses[recipient] = 1;
        if (!isKnownAddress(msg.sender)) _knownAddresses[msg.sender] = 1;

        uint256 MIN_AMOUNT = 1 * (10 ** decimals());
        uint256 _amount = amount * (10 ** decimals());
        require(_amount >= MIN_AMOUNT, "Baubl: must give at least 1.00 BAUBL.");
        require(balanceOf(msg.sender) >= amount, "Baubl: not enough BAUBL to send.");

        _transfer(msg.sender, recipient, _amount);

        emit GiveawayABaubl(msg.sender, recipient, _amount);
    }

    function buyBaubl() public payable {
        require(!isContract(msg.sender), "Baubl: contract addresses are not allowed to call this.");

        uint256 PRICE = 0.000001 ether; // 1 mln BAUBL for 1 ether
        require(msg.value >= PRICE, "Baubl: provide at least 0.0000001 ether for BAUBL.");
        require(msg.value <= 10 ether, "Baubl: too much ether for BAUBL.");

        _purchases += 1;
        if (!isKnownAddress(msg.sender)) _knownAddresses[msg.sender] = 1;
        uint256 amount = msg.value / PRICE;

        // Incentive multiplier
        if (_purchases % 1000 == 0)
            amount = amount * 10;
        else if (_purchases % 100 == 0)
            amount = amount * 5;
        else if (_purchases % 10 == 0)
            amount = amount * 2;

        uint256 _amount = amount * (10 ** decimals());
        require(_amount + OWNER_SUPPLY < balanceOf(owner()), "Baubl: no more BAUBL to buy.");

        payable(owner()).transfer(msg.value);
        _transfer(owner(), msg.sender, _amount);

        emit BuyBaubl(msg.sender, amount, msg.value, _purchases);
    }
}
