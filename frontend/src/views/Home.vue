<template>
  <v-app>
    <v-container grid-list-xs>
      <v-layout wrap>
          <v-flex xs10 offset-xs1>
            <VerticalTab :contracts = "contracts"></VerticalTab>      
          </v-flex>
          <v-flex xs10 offset-xs1>
          <Contract v-for="contract in contracts"
          :name ="contract.contractName"
          :contract="contract.abi" 
          :networks="contract.networks"></Contract>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Contract from '../components/Contract.vue'
import VerticalTab from '../components/VerticalTab.vue'
import contracts from './../../contract.json'
export default {
  components: {
    Contract,
    VerticalTab
  },
  data:() => ({
    contracts: contracts,
    
  })

};
</script>

<style>
  p{
    padding-left: 10px;
  }
</style>
