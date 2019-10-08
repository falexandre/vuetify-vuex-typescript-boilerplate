import Vue from "vue";
import Router from "vue-router";
import { route } from "./utils/FuncHelpers";
import Dashboard from "../pages/features/dashboard/dashboard.router";

Vue.use(Router);

const paths = [
		{
				path: "/",
				redirect: "/dashboard"
		},
		{
				path: "/",
				view: "layouts/logged",
				children: [
						...Dashboard,
				]
		},
		{
				path: "*",
				view: "layouts/error-404",
		},
];

const router = new Router({
		routes: paths.map((path: any) => route(path.path, path.view, path.children, path.redirect))
});

export default router;
