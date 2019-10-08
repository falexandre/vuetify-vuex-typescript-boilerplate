<template>
		<div
				:style="styles"
				:class="classes"
				class="v-offset"
		>
				<slot/>
		</div>
</template>

<script lang="ts">
		import Vue from "vue";
		import { Component, Prop } from "vue-property-decorator";

		@Component({})
		export default class Offset extends Vue {

				@Prop({ type: Boolean, default: false })
				fullWidth: boolean | undefined;

				@Prop({ type: [Number, String], default: 0 })
				offset: number | string | undefined;

				get classes() {
						return {
								"v-offset--full-width": this.fullWidth
						};
				}

				get styles() {
						return {
								top: `-${ this.offset }px`,
								marginBottom: `-${ this.offset }px`
						};
				}
		}
</script>

<style lang="scss">
		.v-offset {
				margin: 0 auto;
				max-width: calc(100% - 32px);
				position: relative;

				header {
						border-radius: 5px;
				}

		}

		.v-offset--full-width {
				max-width: 100%;
		}
</style>
