import { PORT } from "../../constant/constant";

export const loginUser = async (email, password) => {
	const response = await fetch(`${PORT}/api/users/admin-login`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ email, password }),
	});
	const json = await response.json();

	if (!response.ok) {
		return;
	}
	if (response.ok) {
		// save the user to local storage
		return json;
	}
};
