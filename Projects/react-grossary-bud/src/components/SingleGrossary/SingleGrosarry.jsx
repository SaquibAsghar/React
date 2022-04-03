import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import "./SingleGrossaryStyles.css";

const SingleGrosarry = ({ item, onEditHandler, onDeleteHandler }) => {
	return (
		<>
			<article>
				<div className="title">{item.grossary}</div>
				<button className="btn edit" onClick={() => onEditHandler(item.id)}>
					<FaEdit />
				</button>
				<button className="btn delete" onClick={() => onDeleteHandler(item.id)}>
					<FaTrash />
				</button>
			</article>
		</>
	);
};

export default SingleGrosarry;
