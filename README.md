# QUORUM TRUFFLE BOX

This truffle box makes it easy for you to quickly deploy on a quorum node. Contract's can then be interacted with using the generated front-end, ala remix-style.

By default, it uses the default node account generated when a new Quorum node is created. To not use the default node account, simply change the mnemonic or private key in password.js.



## Password.js

Input your mnemonic and Quoroum node RPC into this file. To create your own node, we recommend you to try out Chainstack's 2 week trial [here](https://console.chainstack.com).

To run Quorum nodes locally, head over to truffle's Quorum documentation [here](https://www.trufflesuite.com/docs/truffle/getting-started/working-with-quorum)

## Frontend

The front end is created using Vue.js. It automatically generates all the functions that you need to interact with the contract that you just deployed.

The contract is abstracted via a `truffle-contract`. Thus, you will have to first deploy the contracts to the Quorum network before the front-end can be built.

```
truffle migrate --network quorum
npm run frontend
```

