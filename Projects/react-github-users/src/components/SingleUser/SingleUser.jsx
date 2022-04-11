import React from "react";
import "./SingleUserStyle.css";

const SingleUser = ({ user }) => {
	console.log("Single user ");
	if (user.length === 0) return;
	return (
		<section className="card-container">
			<div className="card">
				<div className="card-content">
					<div className="card-img">
						<img src={user[0].avatar_url} alt={user[0].name} />
					</div>
					<div className="card-info-container">
						<div className="card-info">
							<h4>Name : {user[0].name}</h4>
							<p>Github Name : {user[0].login}</p>
							<p>Repository : {user[0].public_repos}</p>
							<p>Followers : {user[0].followers}</p>
						</div>
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
