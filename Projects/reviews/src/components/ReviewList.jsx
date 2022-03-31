import React from "react";
import SingleReview from "./SingleReview";
import "./singleReview.css";

const ReviewList = (props) => {
	return (
		<>
			<SingleReview {...props} />
		</>
	);
};

export default ReviewList;
