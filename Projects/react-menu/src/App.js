import { useState } from "react";
import "./App.css";
import MenuList from "./components/Menus/MenuList";
import { menuItems } from "./menus";

function App() {
	const [category, setcategory] = useState([]);
	const [menus, setMenus] = useState(menuItems);
	return (
		<div className="container">
			<header>Our Menu</header>
			<div className="underline"></div>
			<nav>Food Category</nav>
			<main>
				{menus.map((menu) => (
					<MenuList key={menu.id} {...menu} />
				))}
			</main>
		</div>
	);
}

export default App;
