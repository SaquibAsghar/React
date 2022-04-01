import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import MenuList from "./components/Menus/MenuList";
import { menuItems } from "./menus";

function App() {
	const [category, setCategory] = useState([]);
	const [menus, setMenus] = useState(menuItems);
	useEffect(() => {
		const newCategory = [];
		menuItems.map((ele) => {
			const { category } = ele;
			if (newCategory.length) {
				if (newCategory.includes(category) === false) {
					newCategory.push(category);
				}
			} else {
				newCategory.push(category);
			}

			return newCategory;
		});
		setCategory(newCategory);
	}, []);

	const onClickHandler = (type) => {
		if (type) {
			const newMenuList = menuItems.filter((menu) => menu.category === type);
			return setMenus(newMenuList);
		} else setMenus(menuItems);
	};

	return (
		<div className="container">
			<header>
				<h1>Our Menu</h1>
				<div className="underline"></div>
			</header>
			<nav className="navbar">
				<button className="btn" onClick={() => onClickHandler()}>
					All
				</button>
				{category.map((cat, ind) => (
					<div key={ind}>
						{<Button type={cat} onClickHandler={onClickHandler} />}
					</div>
				))}
			</nav>
			<main>
				{menus.map((menu) => (
					<MenuList key={menu.id} {...menu} />
				))}
			</main>
		</div>
	);
}

export default App;
