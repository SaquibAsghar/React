import React from "react";
import { Link } from "react-router-dom";
import products from "../data";
const Products = () => {
	return (
		<section className="section product">
			<h2>Products page</h2>

			{products.map((product) => {
				const { id, name } = product;
				return (
					<article key={id}>
						<h5>{name}</h5>
						<Link to={`/products/${id}`}>More info</Link>
					</article>
				);
			})}
		</section>
	);
};

export default Products;
