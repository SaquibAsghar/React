import { useState } from "react";
import "./App.css";
import FriendList from "./components/FriendList";
import { friendsBirthday } from "./friendsBirthday";

function App() {
	const [friends, setFriends] = useState(friendsBirthday);

	const clearFriendList = () => {
		setFriends([]);
	};

	const resetFriendList = () => {
		setFriends([...friendsBirthday]);
	};

	const ctaHandler = () => {
		friends.length ? clearFriendList() : resetFriendList();
	};

	console.log(friends);

	return (
		<div className="App">
			<header>Friends Birthday</header>
			<div>{<FriendList friends={friends} ctaHandler={ctaHandler} />}</div>
		</div>
	);
}

export default App;
