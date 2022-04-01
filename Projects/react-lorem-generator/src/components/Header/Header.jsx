import React, { useState, useRef, useEffect, Children } from "react";
import Button from "../Button/Button";
import LoremList from "../Lorems/LoremList/LoremList";

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

	const loremAPI = `https://hipsum.co/api/?type=hipster-centric&paras=${data.count}`;

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
		console.log(response);
		setData((prevData) => ({ ...prevData, lorems: response }));
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
		<div>
			<div>
				<header>{title}</header>
			</div>
			<div>
				<span>Paragraph : </span>
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
			<Button title="generate" generateLoremHandler={generateLoremHandler} />
			<main>
				{data.lorems.map((lorem, index) => (
					<LoremList key={index} lorem={lorem} />
				))}
			</main>
		</div>
	);
};

export default Header;
