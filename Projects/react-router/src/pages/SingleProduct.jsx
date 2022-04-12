import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
	const { productID } = useParams();
	const product = products.find((prod) => prod.id === productID);
	const { image, name } = product;
	return (
		<article className="section" style={{ margin: "20px" }}>
			<img src={image} alt={name} style={{ width: "400px" }} />
			<h3>{name}</h3>
			<Link to="/products">Back To Products</Link>
		</article>
	);
};

export default SingleProduct;
