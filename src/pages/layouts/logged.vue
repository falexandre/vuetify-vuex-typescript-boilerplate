<template>
		<div>
				<v-app-bar app dark dense>
				</v-app-bar>
				<Breadcrumb />
				<v-fade-transition mode="out-in">
						<router-view/>
				</v-fade-transition>
		</div>
</template>

<script lang="ts">
		import Vue from "vue";
		import Component from "vue-class-component";
		import Breadcrumb from "@/core/components/breadcrumb/breadcrumb.vue";

		@Component({
        components: { Breadcrumb }
    })
    export default class Logged extends Vue {

    }
</script>

<style scoped>

</style>
