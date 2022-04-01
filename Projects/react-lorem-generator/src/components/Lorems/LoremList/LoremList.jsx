import React from "react";
import SingleLorem from "../SingleLorem/SingleLorem";

const LoremList = ({ lorem }) => {
	return (
		<div>
			<SingleLorem lorem={lorem} />
		</div>
	);
};

export default LoremList;
