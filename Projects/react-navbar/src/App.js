import "./App.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function App() {
	return (
		<nav className="nav-container">
			<div className="logo-container">
				<img src={"/image/train_logo.png"} alt="train-logo" />
				<header className="logo-name">TrainRail</header>
			</div>
			<div className="link-container">
        <ul className="links">
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Contact Us</li>
        </ul>
      </div>
			<ul className="social-icons">
				<li>
					<FaFacebook />
				</li>
				<li>
					<FaInstagram />
				</li>
				<li>
					<FaTwitter />
				</li>
				<li>
					<FaYoutube />
				</li>
			</ul>
		</nav>
	);
}

export default App;
