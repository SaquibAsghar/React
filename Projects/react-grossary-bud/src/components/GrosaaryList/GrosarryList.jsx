import React, { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import SingleGrosarry from "../SingleGrossary/SingleGrosarry";

const GrosarryList = ({ grossaryList, onDeleteHandler, onEditHandler }) => {
	return (
		<div>
			{grossaryList.map((item) => (
				<SingleGrosarry
					key={item.id}
					item={item}
					onDeleteHandler={onDeleteHandler}
					onEditHandler={onEditHandler}
				/>
			))}
			{grossaryList.length > 1 && (
				<button className="btn btnClearAll" onClick={() => onDeleteHandler()}>
					Clear All <FaTrash />
				</button>
			)}
		</div>
	);
};

export default GrosarryList;
