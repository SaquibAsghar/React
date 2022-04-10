export const reducer = (state, action) => {
	const { type, payload } = action;
	switch (type) {
		case "FETCH_INIT":
			return { ...state, isLoading: true };
		case "FETCH_SUCCESS":
			return { ...state, hit: payload, isLoading: false };
		case "FETCH_FAILURE":
			return { ...state, isLoading: false };
		default:
			throw new Error("Something went wrong");
	}
};
