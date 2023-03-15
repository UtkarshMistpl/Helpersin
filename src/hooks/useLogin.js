import { useState } from "react";
import { loginUser } from "../services/user/userServices";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const { dispatch } = useAuthContext();

	const login = async (email, password) => {
		setIsLoading(true);
		setError(null);

		const response = await loginUser(email, password);

		if (!(response.status == "success")) {
			setIsLoading(false);
			setError(response.message);
			console.log("error", response.message);
		}

		if (response.status == "success") {
			// save the user to local storage
			localStorage.setItem("user", JSON.stringify(response));

			// update the auth context
			dispatch({ type: "LOGIN", payload: response });

			// update loading state
			setIsLoading(false);
		}
	};

	return { login, isLoading, error };
};
