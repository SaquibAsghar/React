import { createStore } from "redux";

const initialState = {
	count: 0,
};

const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case "INCREMENT":
			return { count: state.count + payload };
		case "DECREMENT":
			return state.count <= 0 ? state : { count: state.count - payload };
		case "ADDTOIT":
			return { count: state.count + payload };

		default:
			return state;
	}
};

const store = createStore(reducer);

export default store;
