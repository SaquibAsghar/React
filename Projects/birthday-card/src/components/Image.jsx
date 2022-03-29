import React from "react";

const Image = ({ name, imgSrc }) => {
	return (
		<div className="img-container">
			<img className="profile-img" src={`/${imgSrc}`} alt={name} />
		</div>
	);
};

export default Image;
