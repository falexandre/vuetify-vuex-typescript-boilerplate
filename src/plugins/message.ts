import Message from "@/core/utils/Message";
import { TranslateResult } from "vue-i18n";

export interface IMessage {
		success: (text: string | TranslateResult) => void;
		danger: (text: string | TranslateResult) => void;
		warning: (text: string | TranslateResult) => void;
		info: (text: string | TranslateResult) => void;
}

declare module "vue/types/vue" {
		interface Vue {
				$alert: IMessage;
		}
}

export default {
		install(Vue: any) {
				Vue.prototype["$alert"] = {
						success(text: string | TranslateResult) {
								return Message.success(text);
						},
						danger(text: string | TranslateResult) {
								return Message.danger(text);
						},
						warning(text: string | TranslateResult) {
								return Message.warning(text);
						},
						info(text: string | TranslateResult) {
								return Message.info(text);
						}
				};
		}
};
