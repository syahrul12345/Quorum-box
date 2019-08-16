<template>
  <v-app>
    <v-container grid-list-xs>
      <v-layout wrap>
        <v-flex xs10 offset-xs1>
            <VerticalTab :contracts = "contracts"></VerticalTab>      
          </v-flex>
          <v-flex xs10 offset-xs1>
          <Contract 
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
    contract:null,
    
  }),
  created() {
    const contractName = this.$route.params.contractName
    //from the contracts object, we need to find the correct contract
    for(var i in this.contracts) {
      if(contractName === this.contracts[i].contractName) {
        this.contract = this.contracts[i]
      }
    }

  },
  beforeRouteUpdate(to,from,next) {
    const futureContract = to.params.contractName
    for(var i in this.contracts){
      if(futureContract === this.contracts[i].contractName){
        this.contract = this.contracts[i]
      }
    }
    next()
  },
  
  
  

};
</script>

<style>
  p{
    padding-left: 10px;
  }
</style>
