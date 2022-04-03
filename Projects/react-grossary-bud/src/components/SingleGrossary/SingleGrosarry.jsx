import React from "react";
// import Button from "../Button/Button";
import { FaEdit, FaTrash } from "react-icons/fa";

import "./SingleGrossaryStyles.css";

const SingleGrosarry = ({ item, cta }) => {
	return (
		<>
			<article>
				<div className="title">{item.grossary}</div>
				<button className="btn edit" >
					<FaEdit />
				</button>
				<button className="btn delete" onClick={() => cta(item.id)}>
					<FaTrash  />
				</button>
			</article>
		</>
	);
};

export default SingleGrosarry;
