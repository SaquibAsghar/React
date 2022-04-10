import React from "react";
import "./SingleUserStyle.css";

const SingleUser = ({ user }) => {
	const githubUser = { ...user };
	console.log(githubUser);
	return (
		<section className="card-container">
			<div className="card">
				<div className="card-content">
					<div className="card-img"></div>
					<div className="card-info">
						<h4>Name : {user[0].name}</h4>
						<p>UserName : {user[0].login}</p>
						<p>Repository : {user[0].public_repos}</p>
						<p>Followers : {user[0].followers}</p>
						<div className="card-cta">
							<a
								className="card-cta--link"
								href={user[0].html_url}
								target="#blank"
							>
								View Profile
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SingleUser;
