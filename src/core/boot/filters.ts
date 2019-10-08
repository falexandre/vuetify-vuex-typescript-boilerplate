import Vue from "vue";
import moment from "moment";
import { moneyShow } from "../utils/FuncHelpers";

Vue.filter("real", (value: any) => moneyShow(value) || "");
Vue.filter("moment", (date: any) => moment(date).format("DD/MM/YYYY HH:mm:ss") || "");
Vue.filter("dateMoment", (date: any) => moment(date).format("DD/MM/YYYY") || "");
Vue.filter("timeMoment", (date: any) => moment(date).format("HH:mm:ss") || "");
