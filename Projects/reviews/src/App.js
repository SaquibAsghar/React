import "./App.css";
import { reveiewData } from "./reviewData";
import ReviewList from "./components/ReviewList";
import { useState } from "react";
import ToggleIcons from "./components/ToggleIcons";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function App() {
	const [showReview, setShowReview] = useState(0);
	const onLeftChevronHandler = () => {
		console.log("Left Chevron Clicked");
	};
	const onRightChevronHandler = () => {
		console.log("Right Chevron Clicked");
	};
	return (
		<div className="main-flexbox-container">
			<header>Testimonials</header>
			<main className="card">
				<ReviewList {...reveiewData[showReview]} />
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
