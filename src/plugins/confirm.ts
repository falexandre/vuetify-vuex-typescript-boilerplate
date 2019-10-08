import { Store } from "@/core/store";
import { TranslateResult } from "vue-i18n";

declare module "vue/types/vue" {
		interface Vue {
				$confirm(message: string | TranslateResult, options?: any): Promise<boolean | false>;
		}
}

export default {
		install(Vue: any, options: any = {}) {
				function show(message: string | TranslateResult, opt: any = {}): Promise<boolean> {
						return new Promise<boolean>((resolve: any) => {
								opt.message = message;
								const params = { ...opt, ...options };
								Store.commit("setMessageParams", params);
								Store.commit("setDialog", true);
								Store.subscribe((mutation: any) => {
										const { type, payload } = mutation;
										if (type === "setChoice") {
												resolve(payload);
										}
								});
						});
				}

				Vue.prototype["$confirm"] = show;
		}
};
