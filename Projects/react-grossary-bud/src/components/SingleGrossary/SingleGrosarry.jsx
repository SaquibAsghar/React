import React from "react";
import Button from "../Button/Button";
import { FaEdit, FaTrash } from "react-icons/fa";

import "./SingleGrossaryStyles.css";

const SingleGrosarry = ({ item }) => {
	return (
		<>
			<article>
				<div className="title">{item.grossary}</div>
				<Button>
					<FaEdit className="edit" />
				</Button>
				<Button>
					<FaTrash className="delete" />
				</Button>
			</article>
			<Button btnClearAll = "btnClearAll">Clear All Items</Button>
		</>
	);
};

export default SingleGrosarry;
