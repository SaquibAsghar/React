import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<section className="section">
			<p>Page you requested does not exits...</p>
			<Link to="/" className="btn">
				Back to Home{" "}
			</Link>
		</section>
	);
};

export default Error;
