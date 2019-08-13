<template>
	<v-container grid-list-xs>
		<v-layout wrap>
			<v-flex xs12>
				<v-card
				:outline="true"
				:hover="false"
				dark>
					<p style="padding-left: 10px;font-size:20px"> Art </p>
					<Tabbed
					:contract="contract"></Tabbed>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
	import Call from './Call.vue'
	import Tabbed from './Tabbed.vue'
	export default {
		props:['contract'],
		components: {
			Call,
			Tabbed
		},
	}
</script>
<style></style>