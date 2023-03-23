import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchAllWorkers } from "../../services/workersServices/workers";

import DataTable from "../tables/table";

const rows = [
	{ id: 1, lastName: "Lit", firstName: "louise", gender: "M" },
	{ id: 2, lastName: "Specter", firstName: "Harvey", gender: "M" },
	{ id: 3, lastName: "", firstName: "Rachel", gender: "M" },
	{ id: 4, lastName: "Hardmen", firstName: "Arya", gender: "M" },
	{ id: 5, lastName: "Hardmen", firstName: "Pierson", gender: "M" },
	{ id: 6, lastName: "Melisandre", firstName: null, gender: "M" },
	{ id: 7, lastName: "Harris", firstName: "Sam", gender: "M" },
	{ id: 8, lastName: "Ross", firstName: "Mike", gender: "M" },
	{ id: 9, lastName: "Specter", firstName: "Donna", gender: "M" },
];

const WorkersTable = ({
	alertModal,
	setAlertModal,
	setCurrentRow,
	setEditModal,
}) => {
	const columns = [
		{ field: "id", headerName: "ID", width: 70 },
		{ field: "firstname", headerName: "First Name", width: 130 },
		{ field: "lastname", headerName: "Last Name", width: 130 },
		{ field: "category", headerName: "Category", width: 130 },
		{
			field: "mobile",
			headerName: "Mobile",
			width: 130,
		},
		{
			field: "details",
			headerName: "Details",
			width: 130,
		},
		{
			field: "Action",
			headerName: "Action",
			description: "This column has a value getter and is not sortable.",
			sortable: false,
			width: 160,
			renderCell: (value, tableMeta, updateValue) => {
				return (
					<div>
						<Button
							variant="contained"
							color="primary"
							key={tableMeta}
							size="small"
							onClick={(e) => {
								e.stopPropagation();
								console.log(value);
								setCurrentRow(value.row);
								setEditModal(true);
								// setOpen(true);
								// setName(cellValue.row.firstName);
							}}
						>
							Edit
						</Button>
						<Button
							variant="contained"
							color="secondary"
							key={tableMeta}
							size="small"
							onClick={(e) => {
								e.stopPropagation();
								console.log(value);
								setCurrentRow(value.row);
								setAlertModal(true);

								console.log("run");
							}}
							sx={{ marginLeft: "0.3rem" }}
						>
							Delete
						</Button>
					</div>
				);
			},
		},
	];

	const [workerColumn, serWorkerColumn] = useState(columns);
	const [workerRows, serWorkerRows] = useState(rows);
	// useEffect(()=>{

	// },[])

	useEffect(() => {
		async function fetchApi() {
			// console.log("current location from home", center);
			let page = 50;
			let fetchWorkers = await fetchAllWorkers(page);
			// console.log(fetchWorkers);
			console.log("list of all workers", fetchWorkers);
			const temp_rows = fetchWorkers.map((result, i) => {
				return {
					id: i + 1,
					firstname: result.name,
					lastname: result.last_name,
					category: result.category,
					mobile: result.mobile,
					details: result.detail,
					rowId: result.id,
					email: result.email,
					country: result.country,
					locality: result.locality,
				};
			});
			serWorkerRows(temp_rows);
		}
		fetchApi();
	}, []);

	return (
		<>
			<div className="mt-5 pt-5">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-11 col-md-8">
							<DataTable rows={workerRows} columns={workerColumn} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default WorkersTable;
