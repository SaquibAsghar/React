import React from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
	return (
		<section className="section">
			<h2>Home page</h2>
			<Outlet />
		</section>
	);
};

export default Home;
