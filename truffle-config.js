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
			network_id:'*', //variable nework id
			gasPrice:0,
			gasLimit:45000000,
			type:"quorum"
		}
	},
	compilers: {
    solc: {
      version: "0.5.0",       //Compiler. version 0.5.0 should be used as higher versions is not supported for Quorum
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    }
  }
};
