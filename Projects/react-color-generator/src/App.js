import { useEffect, useRef, useState } from "react";
import "./App.css";
import Values from "values.js";

function App() {
	const [color, setColor] = useState("");
	const [error, setError] = useState(false);
	const [colorList, setColorList] = useState([]);
	const [inputStyle, setInputStyle] = useState({});

	const onSubmitHandler = (e) => {
		e.preventDefault();
		try {
			if (!color) throw Error("Empty string provided");
			fetchColors();
			setError(false);
			setInputStyle({
				border: "3px solid #80c080",
				outline: "none",
				backgroundColor: "#fff",
			});
		} catch (error) {
			setError(true);
			setInputStyle({
				border: "2px solid red",
				outline: "none",
				backgroundColor: "rgb(240, 163, 163)",
			});
		}
	};

	const fetchColors = () => {
		const colorArray = new Values(color).all(10);
		setColorList(
			colorArray.map((col) => {
				const { hex, weight, type } = col;
				return {
					hex,
					weight,
					type,
				};
			})
		);
	};

	const inputColor = useRef(null);

	const onColorInputHandeler = (e) => {
		const { value } = e.target;
		setColor(value);
		setInputStyle({});
	};

	useEffect(() => {
		const colorArray = new Values("#f15025").all(10);
		setColorList(
			colorArray.map((col) => {
				const { hex, weight, type } = col;
				return {
					hex,
					weight,
					type,
				};
			})
		);
	}, []);

	useEffect(() => {
		inputColor.current.focus();
	});

	useEffect(() => {
		setInputStyle({});
	}, []);

	return (
		<>
			<div className="container">
				<form onSubmit={onSubmitHandler}>
					<label>Color Generator</label>
					<input
						type="text"
						placeholder="#f15025"
						value={color}
						onChange={onColorInputHandeler}
						ref={inputColor}
						style={inputStyle}
					/>
					<button className="btn" type="submit">
						Submit
					</button>
				</form>
			</div>
			<div className="colors-container">
				{colorList.map((color, index) => {
					const { hex, weight, type } = color;
					const textColor = type !== "shade" ? "#000" : "#fff";
					return (
						<div
							className="color-card"
							key={index}
							style={{
								backgroundColor: `#${hex}`,
								color: textColor,
								border: `2px solid #${hex}`,
							}}
						>
							<div className="text">
								<p>{weight}%</p>
								<p>{`#${hex}`}</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default App;
