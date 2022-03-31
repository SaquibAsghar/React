import React, { useState } from "react";
import SingleAnswer from "../SingleAnswer/SingleAnswer";
import { AiOutlineDownCircle, AiFillUpCircle } from "react-icons/ai";
import "./singleQuestionStyles.css";

const SingleQuestion = ({ id, question, ans }) => {
	const [showAns, setShowAns] = useState(false);

	const onToggleAnsHandler = () => {
		setShowAns((prevState) => !prevState);
	};

	return (
		<div className="questions-flexbox-container">
			<div className={showAns ? "questions hide-border" : "questions"}>
				<div className="question">
					<p>
						<span>{id}</span> ) {question}
					</p>
				</div>

				<div className="icons">
					{showAns ? (
						<AiOutlineDownCircle className="icon" onClick={onToggleAnsHandler} />
					) : (
						<AiFillUpCircle className="icon" onClick={onToggleAnsHandler} />
					)}
				</div>
			</div>
			{showAns && <SingleAnswer ans={ans} />}
		</div>
	);
};

export default SingleQuestion;
