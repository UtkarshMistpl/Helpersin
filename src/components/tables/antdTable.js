// import "./App.css";
import { Button, Table } from "antd";
import { useState, useEffect } from "react";
import { fetchAllWorkers } from "../../services/workersServices/workers";
import { Chip } from "@mui/material";
import { COLOR_PRIME_BLUE } from "../../constant/constant";
function AntdTable({ alertModal, setAlertModal, setCurrentRow, setEditModal }) {
	const [dataSource, setDataSource] = useState([]);
	const [totalPages, setTotalPages] = useState(1000);
	const [rowsPerPage, setrowsPerPage] = useState(10);
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

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				padding: "2rem",
			}}
		>
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
