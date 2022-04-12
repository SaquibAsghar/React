import React from "react";
import {useParams, Link} from 'react-router-dom'

const SingleProduct = () => {
	const {productID} = useParams()
	return (
		<section className="section">
			<h2>Product page {productID}</h2>
			<Link to="/products">Back To Products</Link>
		</section>
	);
};

export default SingleProduct;
