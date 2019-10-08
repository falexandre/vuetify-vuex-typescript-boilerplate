import Vue from "vue";
import axios from "axios";

declare module "vue/types/vue" {
		interface Vue {
				$http: any;
		}
}

const Request = axios.create({
		// baseURL: "http://nbbnu006707.interno.senior.com.br:8082",
		baseURL: "http://teste65:8082",
		validateStatus: (status: number) => {
				return status >= 200 && status < 300;
		},
});

Vue.prototype.$http = Request;

export default Request;
