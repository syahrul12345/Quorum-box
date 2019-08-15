<template>
	<v-layout shrink align-center>
		<v-flex xs2>
			{{input.name}}
		</v-flex>
		<v-flex xs4>
			<v-text-field
			:label="input.type"
			v-model="data"
			@input="$emit('update-field',{name:input.name,data:data})"
			>
			 </v-text-field>
		</v-flex>
	</v-layout>
</template>
<script>
	export default {
		props:['input'],
		data() {
			return{
				created:true,
				data:null
			}
		},
		created(){
			
		},
		
	}

</script>