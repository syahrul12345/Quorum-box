const HDWalletProvider = require('truffle-hdwallet-provider');
const { mnemonic, rpc } = require('./password.js')

module.exports = {
	networks: {
		development: {
			host: "127.0.0.1",
			port: 8545,
			network_id: "*"
		},
		quorum: {
			provider: function() {
				return new HDWalletProvider(mnemonic,rpc)
			},
			network_id:'32800',
			gasPrice:0,
			type:"quorum"
		}
	},
};
