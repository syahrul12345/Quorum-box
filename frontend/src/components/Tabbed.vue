<template>
	<v-card>
		<v-tabs
		v-model="item"
		dark>
			<v-tab v-for="tab in tabs" :key="tab.id"> {{tab.name}} </v-tab>
		</v-tabs>
		<v-tabs-items v-model="item">
			<v-tab-item v-for="tab in tabs" :key="tab.id">
				<v-card
				:outline="true"
				color="grey"
				>
				<v-container grid-list-xl v-if="tab.name == 'interact'">
					<v-layout wrap>
						<v-flex xs12 v-for="call in contractABI">
							<Function :functionInfo = "call"></Function>
						</v-flex>
					</v-layout>
				</v-container>
				</v-card>
				
			</v-tab-item>
		</v-tabs-items>
	</v-card>
</template>
<script>
	import Function from "./Function.vue"
	
	export default {
		props:['contract'],
		components: {
			Function
		},
		data: function() {
			return {
				item:null,
				tabs:[
					{"id":1,"name":"interact"},
					{"id":2,"name":"info"},
					{"id":3,"name":"logs"},
				],
				contractABI:null,
			}
		},
		mounted: function() {
			//once mounted, we want to only get constructor
			this.contractABI = this.contract.filter((item) => {
				return item.type === "function"
			})
		}
	}
</script>
<style></style>