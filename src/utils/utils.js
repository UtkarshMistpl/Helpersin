export const filterData = (query, data) => {
	if (!query) {
		return data;
	} else {
		return data.filter((d) => d.toLowerCase().includes(query));
	}
};
