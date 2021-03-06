import { Navigate, useRoutes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import NavBarLayout from "./components/layouts";
import NotFound from "./components/NotFound";

const Router = () => {
	return useRoutes([
		{
			path: "/",
			element: <NavBarLayout />,
			children: [
				{
					path: "/",
					element: <Navigate to="/about-us" />,
				},
			],
		},
		{
			path: "/about-us",
			element: <NavBarLayout />,
			children: [{ element: <Navigate to="/about-us" replace /> }, { path: "", element: <AboutUs /> }],
		},
		{
			path: "/",
			element: <NavBarLayout />,
			children: [
				{ path: "404", element: <NotFound /> },
				{ path: "*", element: <Navigate to="/404" /> },
			],
		},
		{ path: "*", element: <Navigate to="/404" replace /> },
	]);
};

export default Router;
