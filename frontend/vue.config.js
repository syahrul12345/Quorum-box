const fs = require('fs-extra')
const webpack = require('webpack')
const path = require('path')

loyalty = fs.readFileSync('./../build/contracts/loyaltyProgram.json')

module.exports = {
  outputDir: '../dist',
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
        .loader('vue-loader')
        .tap(options => {
          // modify the options...
          fs.readdir('../build/contracts',(err,files) => {
          	if(err){
          		console.log("Failed to build, please migrate your contracts first \n")
          		console.log("use truffle migrate --network quorum")
          	}else {
          		const contract = []
          		files.forEach((file) => {
          			const path = '../build/contracts/' + file
          			const data = JSON.parse(fs.readFileSync(path))
          			contract.push(data)
          			
          		})
          		fs.writeFile("./contract.json",JSON.stringify(contract),(err) => {
          			if(err) {
          				console.log("failed to save contract data to contract.json")
          			}else {
                  console.log("\n")
          				console.log("succesfully saved all contracts into single JSON")
          			}
          		})
          	}
          })
          // data = JSON.stringify(JSON.parse(loyalty))
          // fs.writeFile("./contract.json",data,(error) => {
          // 	console.log("Writing to contract.json")
          // 	if(error){
          // 		console.log(error)
          // 	} 
          // })
          return(options)
        })
  }
}
