import { useEffect, useState, useMemo } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import SingleUser from "./components/SingleUser/SingleUser";

function App() {
	const [user, setUser] = useState([]);
	const [error, setError] = useState("");
	const [query, setQuery] = useState("");
	const [searchNow, setSearchNow] = useState(false);

	const onChangeHandler = (e) => {
		setQuery(e.target.value);
	};

	const onClickSearch = () => {
		setSearchNow(true);
	};

	const getSingleUser = async (queryString) => {
		const response = await fetch(`https://api.github.com/users/${queryString}`);
		if (response.ok && 200 <= response.status <= 299) {
			const data = await response.json();
			setUser([data]);
			setError("");
			console.log(data);
		} else {
			const { message } = await response.json();
			setError(message);
			console.log("error");
		}
	};
	useEffect(() => {
		if (searchNow) {
			getSingleUser(query);
			setSearchNow(false);
		}
	}, [query, searchNow]);
	return (
		<div className="App">
			<h1>Github Users</h1>
			<Search
				query={query}
				onChangeHandler={onChangeHandler}
				onClickSearch={onClickSearch}
			/>
			{error ? <p>{error}</p> : error === "" ? <SingleUser user={user} /> : ""}
		</div>
	);
}

export default App;
