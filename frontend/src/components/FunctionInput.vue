<template>
	<v-container grid-list-xl>
		<v-layout wrap>
			<v-container grid-list-xl v-if="inputs.length != 0">
				<v-layout wrap>
					<v-flex xs12 v-for="input in inputs">
						<InputData :input="input" v-on:update-field="update($event)"></InputData>
					</v-flex> 
				</v-layout>
			</v-container>
			<v-flex xs12>
				<v-card
				:outline="true"
				:hover="false"
				:text="true">
					<v-card-title id="txInfo">Transaction Hash: </v-card-title>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
	import InputData from './InputData.vue'
	export default {
		props:['inputs'],
		components: {
			InputData
		},
		data() {
			return {
				created:true,
				values:[],
			}
		},
		mounted() {
			
		},
		methods: {
			update(value) {
				//first lets find if the object key exists
				let item = this.values.find(e => e.name === value.name)
				if(item === undefined) {
					console.log("it doesnt exist")
					this.values.push(value)
				}else {
					var index = this.values.findIndex(e => e.name === value.name)
					this.values[index] = value
				}
			},
			getValues() {
				// get values to trigger function in child
				return this.values
			}
		}
	}
</script>
<style>
	#txInfo {
		padding-left:1%;
		padding-bottom:1%;
		padding-top:1%;
	}
</style>