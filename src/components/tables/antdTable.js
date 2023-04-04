// import "./App.css";
import { Button, Table, Input, Select } from "antd";
import { useState, useEffect } from "react";
import {
	fetchAllWorkers,
	fetchDataWorkers,
	fetchWorkersByCategory,
} from "../../services/workersServices/workers";
import { Chip } from "@mui/material";
import { COLOR_PRIME_BLUE } from "../../constant/constant";
function AntdTable({
	alertModal,
	setAlertModal,
	setCurrentRow,
	setEditModal,
	categories,
}) {
	const [dataSource, setDataSource] = useState([]);
	const [totalPages, setTotalPages] = useState(1000);
	const [rowsPerPage, setrowsPerPage] = useState(10);
	const [loading, setLoading] = useState(false);
	const [tableCategory, setTableCategory] = useState("");

	// useEffect(() => {
	// 	fetchRecords(1);
	// }, []);
	const handleSearch = (value) => {
		setTableCategory(value);
	};
	const columns = [
		{
			title: "ID",
			dataIndex: "id",
		},
		{
			title: "First Name",
			dataIndex: "name",
		},
		{
			title: "Last Name",
			dataIndex: "last_name",
		},
		{
			title: "Category",
			dataIndex: "category",
		},
		{
			title: "Phone",
			dataIndex: "mobile",
		},
		{
			title: "Details",
			dataIndex: "detail",
		},
		{
			title: "Action",
			key: "operation",
			fixed: "right",
			width: 100,
			render: (text, record, index) => (
				<>
					<Button
						type="primary"
						size="small"
						style={{
							marginBottom: "0.3rem",
							backgroundColor: COLOR_PRIME_BLUE,
						}}
						onClick={() => {
							setCurrentRow(record);
							setEditModal(true);
						}}
					>
						Edit
					</Button>
					<Button
						type="primary"
						size="small"
						danger
						onClick={(e) => {
							console.log("FROM DELTE BUTTON", record);
							setCurrentRow(record);
							setAlertModal(true);
						}}
					>
						Delete
					</Button>
				</>
			),
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
		let fetchWorkers = await fetchAllWorkers(page, size);

		setLoading(false);

		// console.log(fetchWorkers);
		console.log("list of all workers", fetchWorkers);

		setDataSource(fetchWorkers);
	}
	useEffect(() => {
		let page = 1;
		fetchApi(page, 10);
	}, []);

	//serach by category
	const fetchDataByCategory = async () => {
		setLoading(true);
		let fetchWorkers = await fetchWorkersByCategory(tableCategory);
		setLoading(false);

		if (fetchWorkers) {
			setrowsPerPage(fetchWorkers.length);
			setDataSource(fetchWorkers);
		}
		console.log(fetchWorkers);
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "start",
				padding: "2rem",
			}}
		>
			<div style={{ display: "flex", alignItems: "center" }}>
				{/* <Input
					type="text"
					placeholder="Search By Category"
					style={{ marginBottom: "1rem" }}
					onChange={handleSearch}
				/> */}
				<Select
					placeholder="Select A Category"
					onChange={handleSearch}
					style={{ marginBottom: "1rem", minWidth: "180px" }}
				>
					{categories.map((value, i) => {
						return (
							<Select.Option value={value.category} key={value.id}>
								{value.category}
							</Select.Option>
						);
					})}
				</Select>

				<Button
					type="primary"
					size="small"
					style={{ marginBottom: "1rem", marginLeft: "0.5rem" }}
					onClick={fetchDataByCategory}
				>
					Search
				</Button>
			</div>
			<Table
				loading={loading}
				columns={columns}
				dataSource={dataSource}
				pagination={{
					pageSize: rowsPerPage,
					total: totalPages,
					onChange: (page, size) => {
						setrowsPerPage(size);
						console.log(page);
						fetchApi(page, size);
					},
				}}
				scroll={{ x: true }}
				rowKey="id"
			></Table>
		</div>
	);
}
export default AntdTable;
