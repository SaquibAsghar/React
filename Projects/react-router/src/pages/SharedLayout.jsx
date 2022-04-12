import React from "react";
import { Outlet } from "react-router-dom";
import StyledNavBar from "./StyledNavBar";

const SharedLayout = () => {
	return (
		<div>
			<StyledNavBar />
			<Outlet />
		</div>
	);
};

export default SharedLayout;
