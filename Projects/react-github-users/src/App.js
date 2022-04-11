import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import SingleUser from "./components/SingleUser/SingleUser";

function App() {
	const [user, setUser] = useState([]);
	const [count, setCount] = useState(0);

	const getSingleUser = async () => {
		const response = await fetch("https://api.github.com/users/SaquibAsghar");
		const data = await response.json();
		console.log(data);
		setUser([data]);
	};

	console.log(user);
	useEffect(() => {
		console.log("Running Effect");
		getSingleUser();
	}, [count]);
	return (
		<div className="App">
			<h1>Github Users</h1>
			<Search />
			{
				<SingleUser user={user} />
			}
		</div>
	);
}

export default App;
