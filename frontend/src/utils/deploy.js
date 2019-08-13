const Web3 = require('web3')
const Tx = require('ethereumjs-tx').Transaction
//import {mnemonic,rpc} from './../../../password.js'
const web3 = new Web3(new Web3.providers.HttpProvider('http://nd-141-913-775.rg-837-380.p2pify.com:8545'))

/**
@notice Let's start by getting the contract info
@dev Front end already has the function Info object.
**/

export const main = async(functionInfo,parameters) => {
	const paramArray = []
	parameters.forEach(item => {
		paramArray.push(item.data)
	})
	return encode(functionInfo,paramArray)
}

export const encode = async(funcJSON,parameters) => {
	return web3.eth.abi.encodeFunctionCall(funcJSON,parameters)
}

export const sign = async(encodedFunctionCall,contractAddress) => {
	console.log("signing")
	const publickey = "0x8122cdbb70354f0ebd35edb130cc8099c47e99d7"
	// const nonce = await web3.eth.getTransactionCount(publickey)
	// console.log(nonce)
	const privateKey = "2d7ed5f82877866f312fe930a4b1bae3ab5c8ed877117f388fc8a7515dd920f0"
	const privateKeyBuffer = Buffer.from(privateKey,'hex')
	const rawTx = {
		to:contractAddress,
		gas:web3.utils.toHex(450000),
		gasPrice:web3.utils.toHex(0),
		nonce:web3.utils.toHex(0),
		data:encodedFunctionCall
	}
	//creates a new ethereumjs-tx
	const tx = new Tx(rawTx)
	//signs the tx
	tx.sign(privateKeyBuffer)
	//seialize transaction
	var serializedTx = tx.serialize();
	return serializedTx;
}


//web3.eth.isSyncing().then(console.log)

