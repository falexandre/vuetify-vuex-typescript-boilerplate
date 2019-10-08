import Store from "@/core/store";

declare module "vue/types/vue" {
		interface Vue {
				$loading: (value: boolean) => void;
		}
}

export default {
		install(Vue: any) {
				let _timerId = 0;
				Vue.prototype["$loading"] = (value: boolean) => {
						clearTimeout(_timerId);
						_timerId = setTimeout(() => Store.commit("setLoading", value), 300);
				};
		}
};
