import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "count",
	initialState: { count: 0 },
	reducers: {
		increment(state, action) {
            console.log(action)
			state.count += action.payload;
		},
		decrement(state, action) {
			state.count += action.payload;
		},
		addToIt(state, action) {
			state.count += action.payload;
		},
	},
});

const store = configureStore({
	reducer: counterSlice.reducer,
});

export const actions = counterSlice.actions;
export default store;
