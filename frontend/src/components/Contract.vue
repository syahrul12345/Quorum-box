<template>
	<v-container grid-list-xs>
		<v-layout wrap>
			<v-flex xs12>
				<v-card
				:outline="true"
				:hover="false"
				dark>
					<div><p style="padding-left: 10px;font-size:20px"> {{name}} </p></div>
					<div><p style="padding-left: 10px;font-size:20px"> Deployed at: {{contractAddress}} </p></div>
					
					<Tabbed
					:contract="contract" :contractAddress="contractAddress" :key="name"></Tabbed>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
	import Tabbed from './Tabbed.vue'
	export default {
		props:['name','contract','networks'],
		components: {
			Tabbed
		},
		data() {
			return {
				contractAddress:null 
			}
		},
		created() {
			for(var i in this.networks) {
		      this.contractAddress = this.networks[i].address
		    }
		},
		updated() {
			for(var i in this.networks) {
		      this.contractAddress = this.networks[i].address
		    }
		}

	}
</script>
<style></style>