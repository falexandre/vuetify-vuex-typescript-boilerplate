import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(Vuetify);

declare module "vue/types/vue" {
		interface Vue {
				$vuetify: any;
		}
}

export default new Vuetify({
		icons: { iconfont: "md" },
		theme: {
				themes: {
						light: {
								primary: "#428BCA",
								secondary: "#7892A1",
								success: "#0C9348",
								warning: "#F8931F",
								error: "#C13018",
						},
				}
		}
});
