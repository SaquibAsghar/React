import React from "react";
import "./SingleMenu.css";
import { FaRupeeSign } from "react-icons/fa";

const SingleMenu = ({ title, price, desc, img }) => {
	return (
		<div className="food-menu-container">
			<div>
				<img className="food-img" src={img} alt={title} />
			</div>
			<div className="food-menu">
				<div className="food-menu-title">
					<h4 className="title">{title}</h4>
					<h4 className="food-menu-price">
						<FaRupeeSign
							style={{ size: "0.5em" }}
							className="food-menu-price-icon"
						/>
						{price}
					</h4>
				</div>
				<p>{desc}</p>
			</div>
		</div>
	);
};

export default SingleMenu;
