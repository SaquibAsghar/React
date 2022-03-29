import Button from "./Button";
import SingleFriend from "./SingleFriend";

const FriendList = ({ friends, ctaHandler }) => {
	return (
		<main>
			<div className="main-div">
				<p>You have {friends.length} friends birthday today</p>
			</div>
			<div className="main-div">
				{friends.map((friend) => {
					return <SingleFriend key={friend.id} {...friend} />;
				})}
			</div>
			{friends.length ? (
				<Button name="Clear All" ctaHandler={ctaHandler} />
			) : (
				<Button name="Reset" ctaHandler={ctaHandler} />
			)}
		</main>
	);
};

export default FriendList;
