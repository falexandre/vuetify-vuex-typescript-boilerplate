import { importComponent } from "@/core/utils/FuncHelpers";

export default [
		{
				path: "/dashboard",
				meta: {
						auth: true,
						breadcrumb: "Dashboard",
						ico: "dashboard",
				},
				...importComponent("features/dashboard/dashboard"),
		},
];
