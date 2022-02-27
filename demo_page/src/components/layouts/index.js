// import { useState } from 'react';
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
// material
//
import NavBar from "./NavBar";
const NavBarLayout = () => {
	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
};

export default NavBarLayout;
