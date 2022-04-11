import React from "react";
import "./SearchStyle.css";

import { FaSearch } from "react-icons/fa";

const Search = ({ onChangeHandler, query, onClickSearch }) => {
  console.log("Search ")
	return (
		<div className="search-container">
			<form onSubmit={(e) => e.preventDefault()}>
				<div className="input-container">
					<input
						placeholder="Search Github user..."
						value={query}
						onChange={onChangeHandler}
					/>
				</div>
				<button className="btn">
					<FaSearch className="search-icon" onClick={onClickSearch} />
				</button>
			</form>
		</div>
	);
};

export default Search;
