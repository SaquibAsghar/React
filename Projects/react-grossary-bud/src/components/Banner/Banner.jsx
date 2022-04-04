import React, { useEffect } from "react";
import './BannerStyle.css'

const Banner = ({ type, message, setBanner, grossaryList }) => {
	useEffect(() => {
		const timerID = setTimeout(() => {
			setBanner({
				type: "",
				message: "",
				display: false,
			});
		}, 900);
		return () => clearTimeout(timerID);
	}, [grossaryList]);
	return <p className={type}>{message}</p>;
};

export default Banner;
