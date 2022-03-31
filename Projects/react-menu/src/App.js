import "./App.css";
import { menuItems } from "./menus";

function App() {
	return (
		<div>
			<h1>Hello</h1>
			{menuItems.map((menu) => console.log(menu))}
		</div>
	);
}

export default App;
