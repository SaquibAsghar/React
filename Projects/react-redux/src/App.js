import "./App.css";
import { useSelector } from "react-redux";

function App() {
	const { count } = useSelector((storeState) => storeState);
	// useSelector is hook of react-redux which provide state from store to the component.
	// It take a callback function with arg state and return the state object

	return (
		<div className="App">
			<h3>React Router</h3>
			<h4>Counter App</h4>
			<h5>Counter : {count}</h5>
		</div>
	);
}

export default App;
