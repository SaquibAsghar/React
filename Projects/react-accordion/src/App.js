import { useState } from "react";
import "./App.css";
import SingleQuestion from "./components/SingleQuestion/SingleQuestion";
import { data } from "./data";

function App() {
	const [questions] = useState(data);
	return (
		<div className="main-container">
			<main className="main-flexbox-container">
				<aside>
					<h3>React top {questions.length} questions</h3>
				</aside>
				<section>
					{questions.map((ques) => {
						return <SingleQuestion key={ques.id} {...ques} />;
					})}
				</section>
			</main>
		</div>
	);
}

export default App;
