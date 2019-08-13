const Web3 = require('web3')
const {mnemonic,rpc} = require('./../../../password.js')

const web3 = new Web3(new Web3.providers.HttpProvider())