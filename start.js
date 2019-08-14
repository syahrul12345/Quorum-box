const Express = require('express')
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser')
const app = new Express()
const port = 3000

const Web3 = require('web3')
const {mnemonic, rpc,explorer } = require('./password.js')
const web3 = new Web3(new Web3.providers.HttpProvider(rpc),null,{transactionBlockCount:1})

const staticFileMiddleWare = Express.static('dist')

app.use(bodyParser.json())

//remove for production
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

/**
@notice Receives the data payload from the front end
@dev First, we sign and then make a request to the node
**/
app.post('/send',async(req,res) => {
	try{
		console.log("signing")
		const body = req.body
		const signedMessage = await web3.eth.accounts.signTransaction({
			to:body.contractAddress,
			gasPrice:0,
			gasLimit:450000,
			data:body.data
		}, mnemonic)
		const rawTransaction = signedMessage.rawTransaction;
		//next we watn to send this raw transaction
		web3.eth.sendSignedTransaction(rawTransaction)
		.on('error',(error) => {
			res.send(error)
		})
		.on('receipt',(receipt) => {
			res.send([receipt.transactionHash,explorer])
		})

	}catch (ex){
		res.send(ex.toString())
		//res.send("No payload to send transaction")
	}
	
		
})


app.use(staticFileMiddleWare)
app.use(history({
	index:'./dist/index.html'
}))

//second call for redirected requests







app.listen(port)
console.log("listening to port: " + port)