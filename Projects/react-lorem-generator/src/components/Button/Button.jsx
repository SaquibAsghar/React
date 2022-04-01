import React from "react";
import './ButtonStyles.css'

const Button = ({ title, generateLoremHandler }) => {
	return (
		<div>
			<button className="btn" onClick={generateLoremHandler}>
				{title}
			</button>
		</div>
	);
};

export default Button;
