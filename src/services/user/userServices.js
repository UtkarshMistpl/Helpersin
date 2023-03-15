import { PORT } from "../../constant/constant";

export const loginUser = async (email, password) => {
	const response = await fetch(`${PORT}/api/users/admin-login`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ email, password }),
	});
	const json = await response.json();

	if (!response.ok) {
		console.log("json value", json);
		return json;
	}
	if (response.ok) {
		console.log("json value", json);
		// save the user to local storage
		return json;
	}
};

export const getCountries = async () => {
	const response = await fetch(`${PORT}/users/countries`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ location: "curretn" }),
	});
	const json = await response.json();
	console.log("countries", json);
	return json;
};
