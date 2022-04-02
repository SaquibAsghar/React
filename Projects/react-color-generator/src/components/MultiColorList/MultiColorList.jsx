import React from "react";
import SingleColor from "../SingleColor.jsx/SingleColor";
import './MultiColorStyles.css'


const MultiColorList = ({ hex, weight, textColor }) => {
	return (
		<div
			className="color-card"
			style={{
				backgroundColor: `#${hex}`,
				color: textColor,
				border: `2px solid #${hex}`,
				
			}}
		>
			<SingleColor hex={hex} weight={weight} />
		</div>
	);
};

export default MultiColorList;
