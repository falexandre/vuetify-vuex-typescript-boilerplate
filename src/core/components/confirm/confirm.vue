<template>
		<v-layout justify-center>
				<v-dialog max-width="400" persistent v-model="dialog">
						<v-card>
								<v-card-title>
										<span class="headline" v-html="params.title"/>
								</v-card-title>
								<v-card-text v-html="params.message"/>
								<v-card-actions>
										<v-spacer></v-spacer>
										<v-btn @click="choose(false)" color="blue darken-1" text>Não</v-btn>
										<v-btn @click="choose(true)" color="blue darken-1" text>Sim</v-btn>
								</v-card-actions>
						</v-card>
				</v-dialog>
		</v-layout>
</template>

<script lang="ts">
		import Vue from "vue";
		import Component from "vue-class-component";

		@Component({})
		export default class Confirm extends Vue {

				get params() {
						return this.$store.state.confirm.params;
				}

				get dialog() {
						return this.$store.state.confirm.dialog;
				}

				set dialog(value) {
						this.$store.commit("setDialog", value);
				}

				choose(value: boolean) {
						this.$store.commit("setDialog", false);
						this.$store.commit("setChoice", value);
				}

		}
</script>
