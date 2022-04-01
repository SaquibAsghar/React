import React from "react";
import "./ButtonStyles.css";

const Button = ({ type, onClickHandler }) => {
	return (
		<button className="btn" onClick={() => onClickHandler(type)}>
			{type}
		</button>
	);
};

export default Button;
