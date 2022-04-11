import React from "react";
import {Link} from 'react-router-dom'

const About = () => {
	return (
		<section className="section">
			<h2>Welcome to About page</h2>
			<Link to="/" className="btn">
				Home
			</Link>
			<Link to="/about" className="btn">
				About
			</Link>
			<Link to="/products" className="btn">
				Products
			</Link>
		</section>
	);
};

export default About;
