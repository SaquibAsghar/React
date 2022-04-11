import React from "react";
import './SearchStyle.css'

import { FaSearch } from "react-icons/fa";

const Search = () => {
	return (
		<div className="search-container">
			<form onSubmit={(e) => e.preventDefault()}>
				<div className="input-container">
					<input placeholder="Search Github user..." />
				</div>
				<button className="btn">
					<FaSearch className="search-icon" onClick={() => console.log("I am searched...")} />
				</button>
			</form>
		</div>
	);
};

export default Search;
