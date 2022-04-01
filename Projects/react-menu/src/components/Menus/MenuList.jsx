import React from "react";
import SingleMenu from "./SingleMenu";
import './MenuList.css'

const MenuList = (props) => {
	return (
		<section>
			<SingleMenu {...props} />
		</section>
	);
};

export default MenuList;
