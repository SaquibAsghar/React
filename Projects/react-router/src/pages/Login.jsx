import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
	const [loginDetail, setLoginDetail] = useState({
		username: "",
		password: "",
	});

	const navigate = useNavigate();

	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		setLoginDetail((prevDetail) => ({
			...prevDetail,
			[name]: value,
		}));
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();
		if (!loginDetail.username || !loginDetail.password) {
			return;
		}
		setUser(loginDetail.username);
		setLoginDetail({
			username: "",
			password: "",
		});
		navigate("/dashboard");
	};

	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<div>
					<label>
						Name :
						<input
							name="username"
							type="text"
							placeholder="username"
							value={loginDetail.username}
							onChange={onChangeHandler}
							autoComplete="false"
						/>
					</label>
				</div>
				<div>
					<label>
						Password :
						<input
							name="password"
							type="password"
							placeholder="password"
							value={loginDetail.password}
							onChange={onChangeHandler}
							autoComplete="false"
						/>
					</label>
				</div>

				<button>Login</button>
			</form>
		</div>
	);
};

export default Login;
