import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import app from "./app.store";
import notify from "./components/notify/notify.store";
import confirm from "./components/confirm/confirm.store";

Vue.use(Vuex);

export const Store = new Vuex.Store({
		modules: {
				app,
				notify,
				confirm
		},
		plugins: [new VuexPersistence({ modules: ["app"] }).plugin],
});

export default Store;
