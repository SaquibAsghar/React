import { useEffect, useReducer, useState } from "react";

import { reducer } from "../action";
const useCustomFetchHook = (initialUrl, initialData) => {
	let [URL, setURL] = useState(initialUrl);
	const [state, dispatch] = useReducer(reducer, initialData);
	useEffect(() => {
		const fetchData = async () => {
			dispatch({
				type: "FETCH_INIT",
			});
			try {
				const response = await fetch(URL);
				const result = await response.json();
				const { hits } = result;
				dispatch({
					type: "FETCH_SUCCESS",
					payload: hits,
				});
			} catch (error) {
				console.log(error.message);
			} finally {
			}
		};
		fetchData();
	}, [URL]);
	return [state, setURL];
};

export default useCustomFetchHook;
