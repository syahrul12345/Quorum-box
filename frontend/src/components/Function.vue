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
				<v-container grid-list-xs>
					<v-layout wrap>
						<v-flex xs1>
							<v-card-title>{{functionInfo.name}}()</v-card-title>
						</v-flex>
						<v-flex xs1 offset-xs10>
							<v-card-title>
								<v-btn 
								v-if="functionInfo.stateMutability == 'view'" 
								id="unclickableButton" @click.stop="call">call</v-btn>
								<v-btn v-else id="unclickableButton"
								@click.stop="sendTransaction">send</v-btn>
							</v-card-title>
						</v-flex>
						<v-flex xs12>
							<FunctionInput :inputs="functionInfo.inputs" ref="inputChild"></FunctionInput>
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
	import { main,sign } from './../utils/deploy.js'
	export default {
		props:['functionInfo'],
		components:{
			FunctionInput
		},
		data: function() {
			return {
				message:null,
			}
		},
		mounted: function() {
			
		},
		methods: {
			sendTransaction() {
				var values = this.$refs.inputChild.getValues()
				//we need to check if the inputs are equal
				if(values.length == this.functionInfo.inputs.length) {
					const index = values.findIndex(e => e.data === '')
					//this means a zero value exists
					if(index != -1) {
						values.splice(index,1)
					}
					main(this.functionInfo,values).then((result) => {
						console.log(result)
						console.log(sign(result,"0x3aDE7C2603FD90E8bB11D2ae0266D1C2DB1E3b81"))
					}).catch((error) => {
						console.log(error)
					})
					
				}else {
					console.log("doesnt meet requirements!")
				}
			

			},
			call() {
				console.log("callbuttonclicked")
				console.log(this.functionInfo.inputs.length)
			}
			
		}
	}
</script>
<style>
	#unclickableButton{

	}
</style>