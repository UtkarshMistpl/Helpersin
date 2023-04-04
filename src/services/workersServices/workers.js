import { PORT } from "../../constant/constant";

//FETCH DATA

export const fetchDataCategories = async () => {
	// const location = "current";
	const response = await fetch(`${PORT}/api/categories`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ location: "current" }),
	});
	const json = await response.json();
	if (!response.ok) {
		return 0;
	}
	return json.categories;
	// setCategories(json.categories);
	console.log(json);
};

export const fetchDataWorkers = async (category, center, distance = 5) => {
	if (!center) {
		return;
	}
	// const location = "current";
	const response = await fetch(`${PORT}/workers`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			category: category,
			lat: center.lat,
			lng: center.lng,
			distance: distance,
		}),
	});
	const json = await response.json();
	if (!response.ok) {
		return 0;
	}
	return json.workers;
	// setWorkers(json.workers);
	console.log("list of workers", json.workers);
};

export const fetchWorker = async (id) => {
	if (!id) {
		return;
	}
	// const location = "current";
	const response = await fetch(`${PORT}/workers/one`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			id: id,
		}),
	});
	const json = await response.json();
	if (!response.ok) {
		return 0;
	}
	return json.worker;
	// setWorkers(json.workers);
	console.log("list of workers", json.workers);
};

export const fetchAllWorkers = async (page, rows) => {
	if (!page) {
		return;
	}
	// const location = "current";
	const response = await fetch(`${PORT}/workers/all`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			page: page,
			rows: rows,
		}),
	});
	const json = await response.json();
	if (!response.ok) {
		return 0;
	}
	return json.workers;
};

export const fetchWorkersByCategory = async (category) => {
	if (!category) {
		return;
	}
	// const location = "current";
	const response = await fetch(`${PORT}/workers/category`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			category: category,
		}),
	});
	const json = await response.json();
	if (!response.ok) {
		return 0;
	}
	return json.workers;
};
//SEND DATA

export const addNewCategory = async (category) => {
	if (!category) {
		return;
	}
	const response = await fetch(`${PORT}/api/addCategory`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ category }),
	});
	const json = await response.json();

	if (!response) {
		return;
	}
	return json;
};

//DELETE WORKER

export const deleteWorker = async (id) => {
	if (!id) {
		return;
	}
	// const location = "current";
	const response = await fetch(`${PORT}/workers/delete-one`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			id: id,
		}),
	});
	const json = await response.json();
	if (!response) {
		return 0;
	}
	return json;
};

//SAVE WORKER DATA

export const saveWorkerData = async (formData) => {
	if (!formData) {
		return;
	}
	// console.log("servece", photo);
	const response = await fetch(`${PORT}/workers/save`, {
		method: "POST",
		body: formData,
	});
	const json = await response.json();

	if (!response) {
		return;
	}
	return json;
};

//EDIT WORKER DATA
export const editWorkerData = async (user) => {
	if (!user) {
		return;
	}
	const response = await fetch(`${PORT}/workers/edit`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			name: user.firstName,
			last_name: user.lastName,
			category: user.category,
			mobile: user.phone,
			detail: user.details,
			locality: user.locality,
			id: user.id,
		}),
	});
	const json = await response.json();

	console.log("jsone date from edited worker", json);
	if (!response) {
		return;
	}
	return json;
};
