import React from "react";

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
