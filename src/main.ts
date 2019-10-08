import Vue from "vue";
import vuetify from "./plugins/vuetify";
import "./core/boot/filters";
import App from "./App.vue";
import router from "./core/router";
import store from "./core/store";
import "./plugins";
import i18n from "./plugins";

Vue.config.productionTip = false;

new Vue({
		i18n,
		router,
		store,
		// @ts-ignore
		vuetify,
		render: (h) => h(App),
}).$mount("#app");
