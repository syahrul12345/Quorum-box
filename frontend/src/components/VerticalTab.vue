<template>
	<v-card>
	<v-tabs v-model="activeTab">
		<router-link 
		v-for="(contract,i) in contracts"
		:key = "i"
		:to="`/contract/${contract.contractName}`"
		style="text-decoration: none">
			<v-tab text-center style="padding-top: 13px">{{contract.contractName}}</v-tab>
		</router-link>
		<!-- <v-tab v-for="contract in contracts">{{contract.contractName}}</v-tab> -->
	</v-tabs>
	</v-card>
</template>
<script>
	export default {
		props:['contracts'],
		data() {
			return {
				activeTab:null,
				created:true
			}
		},
		created() {
			const contractName = this.$route.params.contractName
			const route = this.$route.path
			
		},

	}
</script>
<style>
	li a {
		text-decoration: none;
	}
</style>