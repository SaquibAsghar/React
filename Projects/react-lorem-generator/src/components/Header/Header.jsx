import React, { useState, useRef, useEffect, Children } from "react";
import Button from "../Button/Button";
import Loading from "../Loading/Loading";
import LoremList from "../Lorems/LoremList/LoremList";

import "./HeaderStyles.css";

const Header = ({ title }) => {
	const [data, setData] = useState({
		count: "",
		range: {
			min: 0,
			max: 10,
		},
		lorems: [],
		isGenerateLorem: false,
	});

	// console.log(data);

	const loremAPI = `https://hipsum.co/api/?type=hipster-centric&paras=${data.count}&start-with-lorem=1`;

	const inputRef = useRef(null);

	const { min, max } = data.range;

	const onRangeHandler = (e) => {
		const { name, value } = e.target;
		return value
			? setData((prevData) => ({ ...prevData, [name]: +value }))
			: setData((prevData) => ({ ...prevData, [name]: value }));
	};

	const fetchLorem = async () => {
		const result = await fetch(loremAPI);
		const response = await result.json();
		setData((prevData) => ({
			...prevData,
			lorems: response,
			isGenerateLorem: !prevData.isGenerateLorem,
		}));
	};

	const generateLoremHandler = () => {
		setData((prevData) => ({
			...prevData,
			isGenerateLorem: !prevData.isGenerateLorem,
		}));
		return data.count ? fetchLorem() : null;
	};

	useEffect(() => {
		inputRef.current.focus();
	});

	return (
		<>
			<div>
				<header>{title}</header>
			</div>
			<div className="flex-container">
				<div>
					<span className="para">Paragraphs : </span>
					<input
						ref={inputRef}
						type="number"
						min={min}
						max={max}
						value={data.count}
						name="count"
						onChange={onRangeHandler}
					/>
				</div>
				<Button title="Generate" generateLoremHandler={generateLoremHandler} />
			</div>
			<main>
				{data.isGenerateLorem ? <Loading /> : ""}
				{data.lorems.map((lorem, index) => (
					<LoremList key={index} lorem={lorem} />
				))}
			</main>
		</>
	);
};

export default Header;
