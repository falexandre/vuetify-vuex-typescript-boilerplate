import { TranslateResult } from "vue-i18n";
import { Store } from "../store";

const Message = {
		success: (message: string | TranslateResult) => {
				Store.commit("setMessage", {
						message,
						color: "success",
				});
				Store.commit("setSnackbar", true);
		},
		danger: (message: string | TranslateResult) => {
				Store.commit("setMessage", {
						message,
						color: "error",
				});
				Store.commit("setSnackbar", true);
		},
		warning: (message: string | TranslateResult) => {
				Store.commit("setMessage", {
						message,
						color: "warning",
				});
				Store.commit("setSnackbar", true);
		},
		info: (message: string | TranslateResult) => {
				Store.commit("setMessage", {
						message,
						color: "info",
				});
				Store.commit("setSnackbar", true);
		},
};
export default Message;
