import React, { useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
// import Button from "../Button/Button";
import SingleGrosarry from "../SingleGrossary/SingleGrosarry";

const GrosarryList = ({ grossaryList, cta }) => {
	return (
		<div>
			{grossaryList.map((item) => (
				<SingleGrosarry key={item.id} item={item} cta={cta} />
			))}
			{grossaryList.length > 1 && (
				<button className="btn btnClearAll" onClick={() => cta()}>
					Clear All <FaTrash />
				</button>
			)}
		</div>
	);
};

export default GrosarryList;
