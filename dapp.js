/*
 * ------------------------------------------------------------------------------------
 * Project: baubl.io
 *
 * Copyright (C) 2023 Baubl.io Project
 *
 * This software is released under the MIT License.
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * ------------------------------------------------------------------------------------
*/

var contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"cost","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"counter","type":"uint256"}],"name":"BuyBaubl","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"giver","type":"address"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"GiveawayABaubl","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"giver","type":"address"},{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bonus","type":"uint256"}],"name":"HaveABaubl","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"recipient","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"UnchainedBaubl","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"buyBaubl","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"freeTransfers","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"giveawayABaubl","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"haveABaubl","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"isAboveFriendsLimit","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"isKnownAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unchainedBaubl","outputs":[],"stateMutability":"nonpayable","type":"function"}];
var contractAddress = '0xcbd514651067342047cd21b4e4dd07cd1152d3fb';

var ownerAddress;
var currentAddress;
var currentAddressEther;
var currentAddressToken;
var tokenPrice = 0.000001;
var LOGGING_ENABLED = false;

const web3 = new Web3(Web3.givenProvider);
const contract = new web3.eth.Contract(contractABI, contractAddress);

function version() {
    document.getElementById('version-value').innerText = '1.003';
}

function dappStatus(message) {
    document.getElementById('status-value').innerText = message;
}

function dappLog() {
    if (LOGGING_ENABLED) {
        var message = Array.prototype.join.call(arguments, " ");
        var timestamp = new Date().toISOString();
        console.log(timestamp + ": " + message);
    }
}

async function getSeatsLeft() {
    let freeTransfers = await contract.methods.freeTransfers().call();
    let seatsLeft = 5000 - freeTransfers;
    document.getElementById('unchained-seats-value').innerText = `${seatsLeft} / 5000`;
    dappLog(`Seats left: ${seatsLeft}`);
}

async function getEtherBalance(address) {
    let balanceInWei = await web3.eth.getBalance(address);
    let balanceInEther = Number(web3.utils.fromWei(balanceInWei, 'ether')).toFixed(8);
    dappLog(`Balance of ${address}: ${balanceInEther} Ether`);
    return Number(balanceInEther);
}

async function getUserBalanceOf(address) {
    var balance = '0';
    if(address.startsWith('0x') && web3.utils.isAddress(address)) {
        balance = await contract.methods.balanceOf(address).call();
    }
    currentAddressToken = Number(web3.utils.fromWei(balance, 'ether'));
    document.getElementById('balance-baubl-value').innerText = currentAddressToken.toLocaleString();

    currentAddressEther = '0';
    if(address.startsWith('0x') && web3.utils.isAddress(address)) {
        currentAddressEther = await getEtherBalance(address)
    }
    document.getElementById('balance-value').innerText = currentAddressEther;
    dappLog("Balance of ", address, ": ", balance, ' Token');
}

async function getTotalSupply() {
    var totalSupply = await contract.methods.totalSupply().call();
    var total = Number(web3.utils.fromWei(totalSupply, 'ether'));
    document.getElementById('available-total-value').innerText = total.toLocaleString();
    dappLog("Token total Supply: ", total);
    return total;
}

async function getAvailableOf() {
    var ownerAddress = await getOwnerAddress();
    var balance = await contract.methods.balanceOf(ownerAddress).call();
    var available = Number(web3.utils.fromWei(balance, 'ether')) - 500000000;
    document.getElementById('available-value').innerText = available.toLocaleString();
    dappLog("Token available ", ownerAddress, ": ", balance);
    return available;
}

async function update() {
    getTotalSupply();
    getAvailableOf();
    getUserBalanceOf(currentAddress);
    getSeatsLeft();
}

async function getOwnerAddress() {
    ownerAddress = await contract.methods.owner().call();
    document.getElementById('owner-address').innerText = ownerAddress;
    dappLog("Contract Owner: ", ownerAddress);
    return ownerAddress;
}

async function unchainedToken() {
    var known = await contract.methods.isKnownAddress(currentAddress).call();
    if (known) {
        dappStatus(currentAddress + ' has received free BAUBL');
        return;
    }
    if (currentAddressToken > 0) {
        dappStatus(currentAddress + ' has Token');
        return;
    }
    if (currentAddressEther <= 0.3) {
        dappStatus(currentAddress + ' must have more than 0.3 ether');
        return;
    }

    dappStatus('unchainedBaubl processing ...');
    try {
        const receipt = await contract.methods.unchainedBaubl().send({from: currentAddress});
        dappStatus('unchainedBaubl status ' + receipt.status);
        dappLog('Receipt:', receipt);
    } catch (error) {
        dappStatus('unchainedBaubl status ' + error.message);
        console.error('An error occurred:', error.message);
    }
}

async function haveAToken() {
    var address = document.getElementById('send-functions-address-input').value;
    var value = document.getElementById('send-functions-amount-input').value;

    if(!address.startsWith('0x') || !web3.utils.isAddress(address)) {
        dappStatus('Friend address is not valid');
        return;
    }
    var known = await contract.methods.isKnownAddress(address).call();
    if (known) {
        dappStatus('Friend ' + address + ' has received BAUBL');
        return;
    }
    var friendEther = await getEtherBalance(address);
    if (friendEther <= 0.3) {
        dappStatus('Friend ' + address + ' has ' + friendEther + ' ether but must have more than 0.3 ether');
        return;
    }

    value = Number(value);
    if(isNaN(value)) {
        dappStatus('Amount must be a whole number >= 1');
        return;
    }
    if (!Number.isInteger(value) || value < 1) {
        dappStatus('Amount must be a whole number >= 1');
        return;
    }
    if (value > currentAddressToken) {
        dappStatus('Not enough BAUBL to send');
        return;
    }
    if (currentAddressEther < 0.3) {
        dappStatus(currentAddress + ' must have more than 0.3 ether');
        return;
    }

    dappStatus('haveABaubl ' + value + ' processing ...');
    try {
        const receipt = await contract.methods.haveABaubl(address, value).send({from: currentAddress});
        dappStatus('haveABaubl status ' + receipt.status);
        dappLog('Receipt:', receipt);
    } catch (error) {
        dappStatus('haveABaubl status ' + error.message);
        console.error('An error occurred:', error.message);
    }
}

async function giveawayAToken() {
    var address = document.getElementById('send-functions-address-input').value;
    var value = document.getElementById('send-functions-amount-input').value;

    if(!address.startsWith('0x') || !web3.utils.isAddress(address)) {
        dappStatus('Friend address is not valid');
        return;
    }

    value = Number(value);
    if(isNaN(value)) {
        dappStatus('Amount must be a whole number >= 1');
        return;
    }
    if (!Number.isInteger(value) || value < 1) {
        dappStatus('Amount must be a whole number >= 1');
        return;
    }
    if (value > currentAddressToken) {
        dappStatus('Not enough BAUBL to giveaway');
        return;
    }

    dappStatus('giveawayABaubl ' + value + ' processing ...');
    try {
        const receipt = await contract.methods.giveawayABaubl(address, value).send({from: currentAddress});
        dappStatus('giveawayABaubl status ' + receipt.status);
        dappLog('Receipt:', receipt);
    } catch (error) {
        dappStatus('giveawayABaubl status ' + error.message);
        console.error('An error occurred:', error.message);
    }
}

async function buyToken() {
    var value = document.getElementById('buy-function-input').value;
    value = Number(value);
    if(isNaN(value)) {
        dappStatus('Amount must be a number');
        return;
    }
    if (value < tokenPrice || value > 10) {
        dappStatus('Amount must at least ' + tokenPrice + ' and no more than 10 ether');
        return;
    }
    if (value > currentAddressEther) {
        dappStatus('Not enough ether in the address: ' + currentAddress);
        return;
    }

    dappStatus('buyBaubl ' + value + ' processing ...');
    try {
        const receipt = await contract.methods.buyBaubl().send({from: currentAddress, value: web3.utils.toWei(value.toString(), 'ether')});
        dappStatus('buyBaubl status ' + receipt.status);
        dappLog('Receipt:', receipt);
    } catch (error) {
        dappStatus('buyBaubl status ' + error.message);
        console.error('An error occurred:', error.message);
    }
}

async function buyOrDonate(input_element) {
    var value = document.getElementById(input_element).value;
    value = Number(value);
    if(isNaN(value)) {
        dappStatus('Amount must be a number');
        return;
    }
    if (value > currentAddressEther) {
        dappStatus('Not enough ether in the address: ' + currentAddress);
        return;
    }
    if (input_element == 'pre-sale-function-buy-input' && value < 0.5) {
        dappStatus('Amount must be >= 0.5 to buy');
        return;
    }
    if (value <= 0) {
        dappStatus('Amount must be a positive number');
        return;
    }

    var help_text = 'Buying BAUBL for '
    if (value < 0.5) {
        help_text = 'Donating '
    }
    dappStatus(help_text + value + ' ether, processing ...');
    web3.eth.sendTransaction({from: currentAddress, to: ownerAddress, value: web3.utils.toWei(value.toString(), "ether")})
    .on('transactionHash', function(hash){
        // This callback will be triggered once the transaction has been sent to the network
        dappStatus(help_text + 'transaction processing hash: ' + hash);
        dappLog('Transaction hash:', hash);
    })
    .on('receipt', function(receipt){
        // This callback will be triggered once the transaction has been mined
        dappStatus(help_text + 'transaction has been mined');
        dappLog('Transaction has been mined. Receipt:', receipt);
    })
    .on('confirmation', function(confirmationNumber, receipt){
        // This callback will be triggered for every confirmation received.
        // Confirmation numbers start from 1.
        dappStatus(help_text + 'transaction confirmation');
        dappLog('Transaction has been confirmed. Confirmation number:', confirmationNumber);
        dappLog('Receipt:', receipt);
    })
    .on('error', function(error){
        // If anything goes wrong, this callback will be triggered
        dappStatus(help_text + 'transaction error: ' + error.message);
        console.error('Error sending transaction:', error);
    });
}

async function buy() {
    return buyOrDonate('pre-sale-function-buy-input')
}

async function donate() {
    return buyOrDonate('donate-function-input')
}

function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
        // Metamask is locked or the user has not connected any accounts
        currentAddress = '0x0';
        dappStatus('No Web3 user accounts found');
        dappLog('No accounts found');
    } else if (accounts[0] !== currentAddress) {
        currentAddress = accounts[0];
        if(!currentAddress.startsWith('0x') || !web3.utils.isAddress(currentAddress)) {
            dappStatus(currentAddress + ' is not valid');
            currentAddress = '0x0';
            return;
        }
        dappStatus('Current User: ' + currentAddress);
        // Display the new current selected account
        document.getElementById('user-value').innerText = currentAddress;
        getUserBalanceOf(currentAddress);
        getSeatsLeft();
    }
}

window.onload = async function() {
    // Check if Metamask is installed
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Request account access
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            // Handle accounts changing
            handleAccountsChanged(accounts);
        } catch (error) {
            // User denied account access...
            dappStatus('User denied account access');
            console.error("User denied account access");
        }
    } else {
        dappLog('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }

    version();
    getTotalSupply();
    getAvailableOf();
    document.getElementById('unchained-function-button').addEventListener('click', unchainedToken);
    document.getElementById('buy-function-button').addEventListener('click', buyToken);
    document.getElementById('send-functions-have-button').addEventListener('click', haveAToken);
    document.getElementById('send-functions-giveaway-button').addEventListener('click', giveawayAToken);
    document.getElementById('pre-sale-function-buy-button').addEventListener('click', buy);
    document.getElementById('donate-function-button').addEventListener('click', donate);

    setInterval(update, 30000); // 30 seconds
};

window.ethereum.on('accountsChanged', handleAccountsChanged);
