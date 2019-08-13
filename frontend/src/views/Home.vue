<template>
  <v-app>
    <v-container grid-list-xs>
      <v-layout wrap>
        <v-flex xs-12>
          <v-card
          :outline="true"
          :hover="false"
          dark>
          Contracts
          </v-card>
          </v-flex>
          <v-flex xs12>
          <Contract
          :contract="contractABI"></Contract>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Contract from '../components/Contract.vue'
import json from './../../../build/contracts/loyaltyProgram.json'
export default {
  components: {
    Contract
  },
  data:() => ({
    contractABI: json.abi
  })
};
</script>

<style>
  p{
    padding-left: 10px;
  }
</style>
