<template>
		<v-dialog full-width fullscreen v-model="loading">
				<v-container fill-height fluid style="background-color: rgba(0, 0, 0, 0.5);">
						<v-layout align-center justify-center>
								<v-progress-circular
										:size="80"
										color="green"
										indeterminate>
								</v-progress-circular>
						</v-layout>
				</v-container>
		</v-dialog>
</template>

<script lang="ts" >
		import Vue from "vue";
		import Component from "vue-class-component";

		@Component({})
		export default class Loading extends Vue {
				get loading() {
						return this.$store.state.app.loading;
				}

				set loading(value) {
						this.$store.commit("setLoading", value);
				}
		}
</script>

<style scoped>

</style>
