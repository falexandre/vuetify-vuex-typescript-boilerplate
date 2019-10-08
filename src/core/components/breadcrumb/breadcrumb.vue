<template>
		<v-breadcrumbs :items="breadcrumbs" light>
				<template v-slot:item="props">
						<v-btn depressed small exact rounded :to="props.item.path">
								{{ props.item.meta.breadcrumb }}
						</v-btn>
				</template>
		</v-breadcrumbs>
</template>

<script lang="ts">
		import Vue from "vue";
		import Component from "vue-class-component";
		import { isValid } from "../../utils/FuncHelpers";

		@Component({})
		export default class Breadcrumb extends Vue {
				get breadcrumbs() {
						const metas: any[] = [];
						this.$route.matched.map((item: any) => {
								if (
										isValid(item) &&
										isValid(item.meta) &&
										isValid(item.meta.breadcrumb)
								) {
										metas.push(item);
								}
						});
						return metas;
				}
		}
</script>

<style scoped>

</style>
