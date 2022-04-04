import { useEffect, useRef, useState } from "react";
import "./App.css";
import { FaPlusCircle, FaEdit } from "react-icons/fa";

import Banner from "./components/Banner/Banner";
import GrosarryList from "./components/GrosaaryList/GrosarryList";

const getLocalStorage = () => {
	let list = localStorage.getItem("list");
	if (list) {
		return JSON.parse(list);
	} else {
		return [];
	}
};

const setLocalStorage = (list) => {
	localStorage.setItem("list", JSON.stringify(list));
};

function App() {
	const [grossary, setGrossary] = useState("");
	const [grossaryList, setGrossaryList] = useState(getLocalStorage());
	const [grossaryItemID, setGrossaryItemID] = useState(null);
	const [isEdit, setIsEdit] = useState(false);
	const [banner, setBanner] = useState({
		type: "",
		message: "",
		display: false,
	});

	const inputRef = useRef(null);

	const onChangeHandler = (e) => {
		const { value } = e.target;
		setGrossary(value);
	};

	const onEditHandler = (editID) => {
		const editItem = grossaryList.find((item) => item.id === editID);
		const { grossary } = editItem;
		setGrossary(grossary);
		setIsEdit(true);
		setGrossaryItemID(editID);
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (grossary && grossaryItemID) {
			setGrossaryList((prevList) =>
				prevList.map((item) => {
					if (item.id === grossaryItemID) {
						return { ...item, grossary };
					} else {
						return item;
					}
				})
			);
			setIsEdit(false);
			setGrossaryItemID(null);
			setGrossary("")
			setBanner({
				type: "success",
				message: "Grossary Updated",
				display: true,
			});
			return;
		} else if (grossary) {
			const newItem = {
				id: new Date().getTime().toString(),
				grossary,
				addedOn: new Date().toLocaleDateString(),
			};

			setGrossaryList((prevList) => [...prevList, newItem]);

			setGrossary("");
			setBanner({
				type: "success",
				message: "Grossary Added to the List",
				display: true,
			});
			return;
		}
		return setBanner({
			type: "danger",
			message: "Please provide some value to the list.",
			display: true,
		});
	};

	const onDeleteHandler = (id = "") => {
		if (id) {
			// console.log(id);
			setGrossaryList((prevList) => prevList.filter((list) => list.id !== id));
			setBanner({
				type: "danger",
				message: "Item deleted from the list",
				display: true,
			});
			return
		}
		return setGrossaryList([]);
	};

	useEffect(() => {
		inputRef.current.focus();
	});

	useEffect(() => {
		setLocalStorage(grossaryList);
	}, [grossaryList]);

	return (
		<div className="container">
			<div className="group">
				<header>
					{banner.display && (
						<div>
							<Banner
								{...banner}
								setBanner={setBanner}
								grossaryList={grossaryList}
							/>
						</div>
					)}
					<h1>Grossary Bud</h1>
				</header>
				<div className="form-group">
					<form>
						<input
							type="text"
							placeholder="eg. Buy milk"
							ref={inputRef}
							value={grossary}
							onChange={onChangeHandler}
						/>
						<button className="btn add" onClick={onSubmitHandler}>
							{isEdit ? <FaEdit /> : <FaPlusCircle />}
						</button>
					</form>
				</div>
				{
					<GrosarryList
						grossaryList={grossaryList}
						onDeleteHandler={onDeleteHandler}
						onEditHandler={onEditHandler}
					/>
				}
			</div>
		</div>
	);
}

export default App;
