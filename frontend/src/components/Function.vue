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
					console.log("length match, can send to web3")
				}else {
					console.log("length mismatch")
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