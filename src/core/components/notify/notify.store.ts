import { set, setMerge } from "@/core/utils/FuncHelpers";

export default {
		state: {
				params: {
						color: null,
						top: true,
						bottom: false,
						left: false,
						right: true,
						message: false,
						timeout: 8000,
						icon: "bell_plus",
				},
				snackbar: false,
		},
		mutations: {
				setSnackbar: set("snackbar"),
				setMessage: setMerge("params"),
		},
};
