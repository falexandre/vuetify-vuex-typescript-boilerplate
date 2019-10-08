<template>
		<v-app>
				<v-content>
						<Loading/>
						<Notify/>
						<Confirm/>
						<router-view/>
				</v-content>
		</v-app>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";
    import Notify from "@/core/components/notify/notify.vue";
    import Loading from "@/core/components/loading/loading.vue";
    import Confirm from "@/core/components/confirm/confirm.vue";

    @Component({
        components: { Notify, Loading, Confirm }
    })
    export default class App extends Vue {
    }
</script>

<style lang="scss">
		@import "./styles/index.scss";
</style>
