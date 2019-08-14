# QUORUM TRUFFLE BOX

This truffle box makes it easy for you to quickly deploy on a quorum node. Contract's can then be interacted with using the generated front-end, ala remix-style.

By default, it uses the default node account generated when a new Quorum node is created. To not use the default node account, simply change the mnemonic or private key in password.js.



## Password.js

Input your mnemonic and Quoroum node RPC into this file. To create your own node, we recommend you to try out Chainstack's 2 week trial [here](https://console.chainstack.com).

To run Quorum nodes locally, head over to truffle's Quorum documentation [here](https://www.trufflesuite.com/docs/truffle/getting-started/working-with-quorum)

## Contract deployment

Simply run
```
truffle migrate --network quorum
```

Make sure to have included your mnemonic,rpc and explorer url (if using Chainstack).

## Deploying front end

The frontend application is built using VueJS. You will have to build it first.
```
cd frontend
npm run build
```

the `/dist/` folder should appear in the project root. Go to the project root and execute `start.js`

```
node start.js
```