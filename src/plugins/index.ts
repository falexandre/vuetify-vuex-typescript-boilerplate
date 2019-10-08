import "./vanilla";
import "./axios";
import "./apexcharts";
import messages from "@/i18n";
import Vue from "vue";
import VueI18n from "vue-i18n";
import LoadingPlugin from "./loading";
import ConfirmPlugin from "./confirm";
import MessagePlugin from "./message";

Vue.use(ConfirmPlugin);
Vue.use(MessagePlugin);
Vue.use(LoadingPlugin);

Vue.use(VueI18n);
const i18n = new VueI18n({
		locale: "pt-br",
		fallbackLocale: "pt-br",
		messages,
});

export default i18n;
