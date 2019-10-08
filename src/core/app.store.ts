import { set, toggle } from "./utils/FuncHelpers";

export default {
		state: {
				loading: false,
				color: "green",
				menuDark: true,
				error: false,
		},
		mutations: {
				setLoading: set("loading"),
				setColor: set("color"),
				setMenuDark: set("menuDark"),
				setErrorRequest: set("error"),
				toggleLoading: toggle("loading"),
				toggleMenuDark: toggle("menuDark"),
		},
};
