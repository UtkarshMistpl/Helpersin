import { createContext, useReducer, useEffect, useState } from "react";
import { fetchDataCategories } from "../services/workersServices/workers";
export const CategoryContext = createContext(null);

export const categoryReducer = (state, action) => {
	switch (action.type) {
		case "SET":
			return { contextcategories: action.payload };
		case "UNSET":
			return { contextcategories: null };
		default:
			return state;
	}
};

export const CategoryContextProvider = ({ children }) => {
	const [contextcategories, dispatch] = useReducer(categoryReducer, {
		category: null,
	});
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchApi() {
			let fetchCategories = await fetchDataCategories();
			// setCategories(fetchCategories);
			if (fetchCategories) {
				dispatch({ type: "SET", payload: fetchCategories });
				setIsLoading(false);
			}
		}
		fetchApi();
	}, []);

	console.log("CATEGORY CONTEXT  state:", contextcategories);

	return (
		<CategoryContext.Provider
			value={{ ...contextcategories, isLoading, dispatch }}
		>
			{children}
		</CategoryContext.Provider>
	);
};
