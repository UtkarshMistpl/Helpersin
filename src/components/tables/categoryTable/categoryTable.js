// import "./App.css";
import { Table } from "antd";
import { useState, useEffect } from "react";
import { fetchDataCategories } from "../../../services/workersServices/workers";
// import { fetchAllWorkers } from "../../services/workersServices/workers";

function CategoryTable() {
	const [dataSource, setDataSource] = useState([]);
	const [totalPages, setTotalPages] = useState(100);
	const [rowsPerPage, setrowsPerPage] = useState(5);
	const [loading, setLoading] = useState(false);

	// useEffect(() => {
	// 	fetchRecords(1);
	// }, []);
	const columns = [
		{
			title: "ID",
			dataIndex: "id",
		},
		{
			title: "Category",
			dataIndex: "category",
		},
		{
			title: "Action",
			dataIndex: "actions",
		},
	];

	// const fetchRecords = (page) => {
	// 	setLoading(true);
	// 	axios
	// 		.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`)
	// 		.then((res) => {
	// 			setDataSource(res.data.data);
	// 			setTotalPages(res.data.totalPages);
	// 			setLoading(false);
	// 		});
	// };

	async function fetchApi(page, size) {
		// console.log("current location from home", center);
		setLoading(true);
		let fetchWorkers = await fetchDataCategories();
		setLoading(false);

		// console.log(fetchWorkers);
		console.log("list of all workers", fetchWorkers);

		setDataSource(fetchWorkers);
	}
	useEffect(() => {
		let page = 1;
		fetchApi();
	}, []);

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Table
				loading={loading}
				columns={columns}
				dataSource={dataSource}
				scroll={{ x: true }}
				pagination={{
					pageSize: 5,
				}}
				rowKey="id"
			></Table>
		</div>
	);
}
export default CategoryTable;
