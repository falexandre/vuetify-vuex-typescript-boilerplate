import { set, setMerge } from "@/core/utils/FuncHelpers";

export default {
		state: {
				params: {
						title: "Confirme",
						message: "Minha mensagem",
				},
				dialog: false,
				choice: false,
		},
		mutations: {
				setDialog: set("dialog"),
				setChoice: set("choice"),
				setMessageParams: setMerge("params"),
		},
};
