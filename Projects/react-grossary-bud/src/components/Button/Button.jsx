import React from "react";

import "./ButtonStyles.css";
const Button = ({ children, btnClearAll = "" }) => {
	return (
		<>
			<button className={`btn ${btnClearAll}`}>{children}</button>
		</>
	);
};

export default Button;
