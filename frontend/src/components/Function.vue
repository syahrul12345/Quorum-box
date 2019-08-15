<template>
	<v-container grid-list-xl>
		<v-layout wrap>
			<v-flex xs12>
				<v-card 
				class="mx-auto"
				:outline="true"
				color="white"
				:hover="true"
				>
				<v-container grid-list-xs :fluid="false">
					<v-layout wrap>
						<v-flex xs1>
							<v-card-title>{{functionInfo.name}}()</v-card-title>
						</v-flex>
						<v-flex xs1 offset-xs10>
							
							<v-btn 
							v-if="functionInfo.stateMutability == 'view'" 
							id="clickableButton" @click.stop="call">call</v-btn>
							<v-btn v-else id="clickableButton"
							@click.stop="sendTransaction">send</v-btn>
						</v-flex>
						<v-flex v-if="functionInfo.inputs.length != 0" xs12>
							<FunctionInput :inputs="functionInfo.inputs" ref="inputChild"></FunctionInput>
						</v-flex>
						<v-flex xs12>
							<p id="errorText" v-if="error"> {{error}}</p>
							<v-card
							:outline="true"
							:hover="false"
							:text="true">
									<v-list
									:flat="true">
										<v-card-title v-if="functionInfo.stateMutability != 'view'"> Transaction hashes: </v-card-title>
										<v-card-title v-else>Result: </v-card-title>
										<v-list-item-group v-model="resultList.length">
											<v-list-item
											v-for="(result,i) in resultList"
											:key="i">
												<v-list-item-title>{{result}}</v-list-item-title>
											</v-list-item>
										</v-list-item-group>
										<v-list-item-group v-model="transactionList.length">
											<v-list-item 
											v-for="(transaction,i) in transactionList"
											:key ="i">
												<a :href="`//${explorerUrl}/transactions/${transaction}`">
												<v-list-item-title>{{transaction}}</v-list-item-title>
												</a>
											</v-list-item>
										</v-list-item-group>

									</v-list>
							</v-card>
						</v-flex>
					</v-layout>
				</v-container>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
	import FunctionInput from './FunctionInput.vue'
	import { send,call } from './../utils/deploy.js'
	export default {
		props:['functionInfo','contractAddress'],
		components:{
			FunctionInput
		},
		data: function() {
			return {
				message:null,
				transactionList:[],
				resultList:[],
				explorerUrl:null,
				error:null
			}
		},
		mounted: function() {
			
		},
		methods: {
			sendTransaction() {
				if(this.functionInfo.inputs.length === 0){
					//no input for send function
					send(this.functionInfo,this.contractAddress,[]).then((result) => {
						try{
							this.transactionList.push(result.data[0])
							this.explorerUrl = result.data[1]
							this.error = null
						}catch(ex) {
							this.error = result
						}
					})
				}else {
					var values = this.$refs.inputChild.getValues()
					//we need to check if the inputs are equal
					if(values.length == this.functionInfo.inputs.length) {
						//removes zero index
						const index = values.findIndex(e => e.data === '')
						//this means a zero value exists
						if(index != -1) {
							values.splice(index,1)
						}

						send(this.functionInfo,this.contractAddress,values).then((result) => {
							try{
								this.transactionList.push(result.data[0])
								this.explorerUrl = result.data[1]
								this.error = null
							}catch(ex) {
								this.error = result
							}
						})

					}else {
						console.log("doesnt meet requirements!")
					}
				}
				

			},
			call() {
				if(this.functionInfo.inputs.length === 0) {
					call(this.functionInfo,this.contractAddress).then((result) => {
						try{
							this.resultList.push(result.data)
						}catch(ex){
							this.error = result
						}
					})
				}
				
			}
			
		}
	}
</script>
<style>
	#clickableButton{

	}
</style>