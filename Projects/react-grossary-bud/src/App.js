import { useState } from "react";
import "./App.css";
import GrosarryList from "./components/GrosaaryList/GrosarryList";

function App() {
	const [grossary, setGrossary] = useState("");
	const [grossaryList, setGrossaryList] = useState([]);
	const [grossaryItemID, setGrossaryItemID] = useState(null);
	const [banner, setBanner] = useState({
		type: "",
		message: "",
		display: true,
	});

	const onChangeHandler = (e) => {
		const { value } = e.target;
		setGrossary(value.trim());
	};

  const onSubmitHandler = () =>{
    const newItem = {
      id: new Date().getTime().toString(),
      title: grossary,
      addedOn: new Date().toLocaleDateString()
    }
  }

	return (
		<div>
			<header>
				<h1>Grossary Bud</h1>
			</header>
			<div className="form-group">
				<form>
					<input type="text" value={grossary} onChange={onChangeHandler} />
          <button onClick={() => {}}>Add</button>
				</form>
			</div>
			<GrosarryList />
		</div>
	);
}

export default App;
