import { useState } from "react";
import "./App.css";
import useCustomFetchHook from "./hooks/FetchHook";

function App() {
	const [state, doFetch] = useCustomFetchHook(
		`https://hn.algolia.com/api/v1/search?query=redux`,
		{ hit: [], isLoading: false }
	);


	let [searchQuery, setSearchQuery] = useState("");

	const { hit: newsData } = state;

	const onChangeHandler = (e) => {
		setSearchQuery(e.target.value);
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (!searchQuery) {
			searchQuery = "redux";
		}
		doFetch(`https://hn.algolia.com/api/v1/search?query=${searchQuery}`);
	};

	return (
		<div>
			<h1>Hacker News</h1>
			<form onSubmit={onSubmitHandler}>
				<label htmlFor="searchText">Search News</label>
				<input
					id="searchText"
					type="text"
					placeholder="eg. redux..."
					value={searchQuery}
					onChange={onChangeHandler}
				/>
				<button>Submit</button>
			</form>
			{state.isLoading ? (
				<h3>Loading Data...</h3>
			) : (
				<ol>
					{newsData.map((ele) => {
						return (
							<li key={ele.objectID}>
								<a href={ele.url} target="#blank">
									{ele.title}
								</a>
							</li>
						);
					})}
				</ol>
			)}
		</div>
	);
}

export default App;
