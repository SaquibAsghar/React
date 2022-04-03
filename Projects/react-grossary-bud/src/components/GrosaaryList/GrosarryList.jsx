import React from "react";
import SingleGrosarry from "../SingleGrossary/SingleGrosarry";

const GrosarryList = ({ grossaryList }) => {
	return (
		<div>
			{grossaryList.map((item) => (
				<SingleGrosarry key={item.id} item={item} />
			))}
		</div>
	);
};

export default GrosarryList;
