import React from "react";
import "./singleReview.css"

const SingleReview = ({ id, name, designation, image, review }) => {
	// console.log(id, name, designation, image, review);
	return (
		<section className="people-review-flexbox">
			<div>
				<img className="people-review-img" src={image} alt={name} />
			</div>
			<div>{name}</div>
			<div>{designation}</div>
			<div>{review}</div>
		</section>
	);
};

export default SingleReview;
