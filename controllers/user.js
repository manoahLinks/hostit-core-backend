require('dotenv').config();
    const ethers = require('ethers'),
    eventAbi = require('../abis/eventAbi.json'),
    fs = require('fs'),
    sdk =  require('@api/poap'),
    User = require('../models/user');


const provider = new ethers.JsonRpcProvider("https://rpc.sepolia-api.lisk.com");

const encryptedKey = fs.readFileSync("./.encryptKey.json", "utf8");

exports.getUsersTickets = async (req, res) => {

    const {address} = req.params

    try {
        
        sdk.auth(process.env.POAP_API_KEY);
        sdk.gETActionsScan({address: address})
            .then(({ data }) => res.status(200).json({message: 'success', data: data}))
            .catch(err => console.error(err));

    } catch (error) {
        return res.status(400).json({error: error.message, error: error})  
    }

}

exports.registerUser = async (req, res) => {

    const {
        email,
        userAddr,
        avatar
    } = req.fields;
    
    let wallet = await ethers.Wallet.fromEncryptedJson(encryptedKey, process.env.PRIVATE_KEY_PASSWORD);

    wallet = wallet.connect(provider);

    // get smart contract instance with ethers
    const contract =  new ethers.Contract("0x8efea8020F59abAa810A1c6280dc15efB72EeBef", eventAbi, wallet);

    try {

       const transaction = await contract.registerENS(userAddr, email, avatar);

       const reciept = await transaction.wait();

       res.status(201).json({message: 'success', data: reciept})
        
    } catch (error) {
        return res.status(400).json({error: error.message, error: error})
    }
}

exports.mintPoap = async (req, res) => {
    try {

        
        
    } catch (error) {
        return res.status(400).json({error: error.message, error: error})
    }
}

module.exports = exports;