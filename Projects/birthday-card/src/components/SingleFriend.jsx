import React from "react";
import Detail from "./Detail";
import Image from "./Image";

const SingleFriend = ({ name, imgSrc, age }) => {
	return (
		<section>
			<Image name={name} imgSrc={imgSrc} />
			<Detail name={name} age={age} />
		</section>
	);
};

export default SingleFriend;
