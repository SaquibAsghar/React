import React, { useEffect, useState } from "react";
import { FaRegCopy, FaCheckCircle } from "react-icons/fa";
import "./SingleColorStyles.css";

const SingleColor = ({ hex, weight }) => {
	const [copiedText, setCopiedText] = useState(false);

	const onWriteToClipboardHandler = (val) => {
		navigator.clipboard.writeText(`#${val}`);
		setCopiedText(true);
	};

	useEffect(() => {
		setTimeout(() => {
			setCopiedText(false);
		}, 900);
	}, [copiedText]);

	return (
		<>
			<div className="icon-container">
				{copiedText ? (
					<FaCheckCircle />
				) : (
					<FaRegCopy
						className="clip-icon"
						onClick={() => onWriteToClipboardHandler(hex)}
					/>
				)}
			</div>
			<div className="text">
				<p>{weight}%</p>
				<p>{`#${hex}`}</p>
				{copiedText ? <p>Color Copied</p> : ""}
			</div>
		</>
	);
};

export default SingleColor;
