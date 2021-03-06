const Web3 = require('web3')
const Tx = require('ethereumjs-tx').Transaction
const web3 = new Web3(new Web3.providers.HttpProvider('http://nd-141-913-775.rg-837-380.p2pify.com:8545'))
const axios = require('axios')
/**
@notice Let's start by getting the contract info
@dev Front end already has the function Info object. Only need to encode it
**/

export const send = async(functionInfo,contractAddress,parameters) => {
	try {
		const paramArray = []
		console.log(paramArray)
		parameters.forEach(item => {
			paramArray.push(item.data)
		})
		const encodedFunction = web3.eth.abi.encodeFunctionCall(functionInfo,paramArray)
		const payload = {"contractAddress":contractAddress,"data":encodedFunction}
		return axios.post('http://localhost:3000/send',payload)
	} catch (ex) {
		return (ex.toString())
	}
	
	//send encoded function to the server where it will sign it
}


export const call = async(functionInfo,contractAddress) => {
	try{
		const encodedFunction = web3.eth.abi.encodeFunctionSignature(functionInfo)
		const payload = {"contractAddress":contractAddress,"data":encodedFunction}
		return axios.post('http://localhost:3000/call',payload)
	} catch (ex) {
		return (ex.toString())
	}
	

}
//web3.eth.isSyncing().then(console.log)

