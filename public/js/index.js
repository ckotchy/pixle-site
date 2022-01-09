"use strict";

let mintAddress = "0x91684594108834B4c3CffC9913911c4dcb9c1f26";
let mintABI = [{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"_baseURI","type":"string"},{"internalType":"string","name":"_notRevealedURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_PURCHASABLE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINT_INTERVAL","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_users","type":"address[]"}],"name":"addToWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"clearWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"closeSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"closeWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentInterval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getWhitelistSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"incrementCurrentInterval","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"isWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numberOfTokens","type":"uint256"}],"name":"mintAstrada","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintOnePerRelease","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"mintedInCurrentInterval","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"notRevealedURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"openWhitelist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_reserveAmount","type":"uint256"}],"name":"reserveTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"revealMapping","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"saleIsActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPurchasable","type":"uint256"}],"name":"setMaxPurchasable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_value","type":"bool"}],"name":"setMintOnePerRelease","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_notRevealedURI","type":"string"}],"name":"setNotRevealedURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_releaseInterval","type":"uint256"}],"name":"setRevealForRelease","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newPrice","type":"uint256"}],"name":"setTokenPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whitelistActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"whitelistedAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]

let provider, selectedAccount;
const WalletConnectProvider = window.WalletConnectProvider.default;

window.addEventListener('load', async () => {
    document.querySelector("#btn-connect").addEventListener("click", onConnect);
    document.querySelector("#btn-mint").addEventListener("click", mintToken);

    //updateTotalSupply()
});

async function updateTotalSupply(){
    console.log("updating total supply")
    let web3 = new Web3(provider);
    let mintInstance = new web3.eth.Contract(mintABI, mintAddress);

    var totalSupply = await mintInstance.methods.totalSupply().call()
    var totalRemaining = 1000 - totalSupply;

    document.querySelector("#mint-count").textContent = `${totalRemaining}/10000`;//"Tokens Remaining: " + totalRemaining;
}

async function onConnect() {

    provider = await detectEthereumProvider();
    if (provider === window.ethereum) {
        window.ethereum
            .request({ method: 'eth_requestAccounts' })
            .then(accounts => {
                selectedAccount = accounts[0];
                document.querySelector("#btn-connect").style.display = "none";
                document.querySelector("#mint_amount").style.display = "block";
                document.querySelector("#btn-mint").style.display = "block";
                document.querySelector("#mint-count").style.display = "block";
            })
            .catch((err) => {
                console.error(err);
            });
    } else {
        provider = new WalletConnectProvider({
            pollingInterval: "10000",
            infuraId: "ee3a6513482447aeb7192140120519b3", // TODO: replace with PIXLE id
        });
        provider.enable()
            .then(async (accepted) => {
                const web3 = new Web3(provider);
                const accounts = await web3.eth.getAccounts();

                selectedAccount = accounts[0];
                document.querySelector("#btn-connect").style.display = "none";
                document.querySelector("#btn-mint").style.display = "block";
                document.querySelector("#mint-count").style.display = "block";
            })
            .catch((err) => {
                console.error(err);
            });
    }
    updateTotalSupply()
    setInterval(updateTotalSupply, 5000);
}

async function mintToken() {
    let web3 = new Web3(provider)
    let chainId = await web3.eth.getChainId();
    if(chainId != 1){
        alert("Please switch to the ETH Mainnet Chain in Order to Mint");
    }
    let mintInstance = new web3.eth.Contract(mintABI, mintAddress)
    let mint_amount = document.querySelector("#mint_amount").value;
    let price = await mintInstance.methods.tokenPrice().call()
    console.log("Token Price: " + price)
    console.log("mint address: " + mintAddress)
    console.log("mint amount: " + mint_amount)
    let mint_price = Number(mint_amount) * Number(price)
    //let amount = Number(mint_price) * 1000000000000000000

    console.log(Number(mint_amount))
    console.log(Web3.utils.toWei(String(mint_price), "wei"))
    //console.log(Web3.utils.toWei(String(amount), "wei"))

    // TODO: change method to contract function

    mintInstance.methods.mintAstrada(Number(mint_amount))
        .send({
            from: selectedAccount,
            value: Web3.utils.toWei(String(mint_price), "wei"),
            gasLimit: "500000",
        })
        .on('transactionHash', function (hash) {
            console.log("Transaction Hash: ", hash)
            document.querySelector("#alert-msg").style.display = "block";
            document.querySelector("#alert-msg").textContent = `Transaction is submitted to network with Hash`;
        })
        .on('receipt', function (receipt) {
            console.log("Receipt: ", receipt)
            document.querySelector("#alert-msg").style.display = "block";
            document.querySelector("#alert-msg").textContent = `Transaction Successfully Completed`;
        })
        .on('error', function (error, receipt) {
            console.log("Error receipt: ", receipt)
        });
}