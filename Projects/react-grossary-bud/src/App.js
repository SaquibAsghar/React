import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import GrosarryList from "./components/GrosaaryList/GrosarryList";

function App() {
	const [grossary, setGrossary] = useState("");
	const [grossaryList, setGrossaryList] = useState([]);
	const [grossaryItemID, setGrossaryItemID] = useState(null);
	const [isEdit, setIsEdit] = useState(false);
	const [banner, setBanner] = useState({
		type: "",
		message: "",
		display: false,
	});

	const onChangeHandler = (e) => {
		const { value } = e.target;
		setGrossary(value.trim());
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (grossary) {
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
		}
	};

	return (
		<div className="container">
			<div className="group">
				<header>
					{
          //   banner.display && (
					// 	<div>
					// 		<Banner
					// 			{...banner}
					// 			setBanner={setBanner}
					// 			grossaryList={grossaryList}
					// 		/>
					// 	</div>
					// )
        }
					<h1>Grossary Bud</h1>
				</header>
				<div className="form-group">
					<form>
						<input type="text" value={grossary} onChange={onChangeHandler} />
						<button onClick={onSubmitHandler}>Add</button>
					</form>
				</div>
				<GrosarryList grossaryList={grossaryList} />
			</div>
		</div>
	);
}

export default App;
