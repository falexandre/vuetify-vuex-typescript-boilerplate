<template>
		<v-snackbar
				:bottom="params.bottom"
				:color="params.color"
				:left="params.left"
				:right="params.right"
				:timeout="params.timeout"
				:top="params.top"
				dark
				v-model="snackbar"
		>
				<div>{{params.message}}</div>
				<v-btn @click.native="snackbar = false" dark text>
						<v-icon>close</v-icon>
				</v-btn>
		</v-snackbar>
</template>

<script lang="ts" >
		import Vue from "vue";
		import Component from "vue-class-component";

		@Component({})
		export default class Notify extends Vue {

				get params() {
						return this.$store.state.notify.params;
				}

				get snackbar() {
						return this.$store.state.notify.snackbar;
				}

				set snackbar(value) {
						this.$store.commit("setSnackbar", value);
				}
		}
</script>

<style scoped>

</style>
