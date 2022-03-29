import React from "react";

const Button = ({ name, ctaHandler }) => {
	return (
		<button className="btn" onClick={ctaHandler}>
			{name}
		</button>
	);
};

export default Button;
