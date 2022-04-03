import React from "react";
import Button from "../Button/Button";

import './SingleGrossaryStyles.css'

const SingleGrosarry = ({ item }) => {
	return (
		<article>
			<div className="title">{item.grossary}</div>
			<Button />
		</article>
	);
};

export default SingleGrosarry;
