import React from "react";
import { NavLink } from "react-router-dom";

const StyledNavBar = () => {
	return (
		<nav>
			<NavLink
				style={({ isActive }) => {
					return { color: isActive ? "red" : "green" };
				}}
				to="/"
			>
				Home
			</NavLink>
			<NavLink
				style={({ isActive }) => {
					return { color: isActive ? "red" : "green" };
				}}
				to="about"
			>
				About
			</NavLink>
			<NavLink
				style={({ isActive }) => {
					return { color: isActive ? "red" : "green" };
				}}
				to="products"
			>
				Products
			</NavLink>
			<NavLink
				style={({ isActive }) => {
					return { color: isActive ? "red" : "green" };
				}}
				to="login"
			>
				Login
			</NavLink>
		</nav>
	);
};

export default StyledNavBar;
