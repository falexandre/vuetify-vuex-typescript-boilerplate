<template>
		<div>
				<v-app-bar app dark>
				</v-app-bar>
				<v-scroll-y-transition mode="out-in">
						<v-content>
								<v-container fill-height fluid>
										<v-layout align-center justify-center>
												<v-flex md4 sm8 xs12 class="text-center">
														<v-alert type="error" >{{$t("messages.404_error")}}</v-alert>
														<v-btn @click="$router.go(-1)" color="primary" class="ma-2">{{ $t("messages.goback") }}</v-btn>
												</v-flex>
										</v-layout>
								</v-container>
						</v-content>
				</v-scroll-y-transition>
		</div>
</template>

<script lang="ts">
		import Vue from "vue";

		export default Vue.extend({
				name: "error-404",
		});
</script>
