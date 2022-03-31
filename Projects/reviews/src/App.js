import { useState } from "react";
import "./App.css";
import { reveiewData } from "./reviewData";
import ReviewList from "./components/ReviewList";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function App() {
	const [showReview, setShowReview] = useState(0);

	const checkIndex = (num) => {
		if (num > reveiewData.length - 1) {
			return (num = 0);
		} else {
			if (num < 0) {
				console.log(num);
				return (num = 4);
			}
		}
		return num;
	};

	const onLeftChevronHandler = () => {
		console.log("Left Chevron Clicked");
		setShowReview((prevValue) => {
			let newIndex = prevValue - 1;
			return checkIndex(newIndex);
		});
	};
	const onRightChevronHandler = () => {
		console.log("Right Chevron Clicked");
		setShowReview((prevValue) => {
			let newIndex = prevValue + 1;
			return checkIndex(newIndex);
		});
	};

	return (
		<div className="main-flexbox-container">
			<header>Testimonials</header>
			<main className="card">
				<div>
					<ReviewList {...reveiewData[showReview]} />
				</div>
				<div className="toggle-icon">
					<FaChevronLeft
						className="chevron-left"
						onClick={onLeftChevronHandler}
					/>
					<FaChevronRight
						className="chevron-right"
						onClick={onRightChevronHandler}
					/>
				</div>
			</main>
		</div>
	);
}

export default App;
