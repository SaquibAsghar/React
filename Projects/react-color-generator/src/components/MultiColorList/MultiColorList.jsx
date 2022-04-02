import React from "react";
import SingleColor from "../SingleColor.jsx/SingleColor";
import "./MultiColorStyles.css";

const MultiColorList = ({ hex, weight, textColor }) => {
	const styles = {
		backgroundColor: `#${hex}`,
		color: textColor,
		border: `2px solid #${hex}`,
	};

	return (
		<div className="color-card" style={styles}>
			<SingleColor hex={hex} weight={weight} />
		</div>
	);
};

export default MultiColorList;
