import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({ rows, columns }) {
	const [pageState, setPageState] = React.useState({ page: 1, pageSize: 10 });
	return (
		<div style={{ height: "100vh", width: "100%" }}>
			<DataGrid
				rows={rows}
				columns={columns}
				page={pageState.page}
				pageSize={pageState.pageSize}
				paginationMode="server"
				rowCount={25}
				rowsPerPageOptions={[10, 30, 50, 70, 100]}
				checkboxSelection
				onPageChange={(newPage) => {
					console.log("page change");
					setPageState((old) => ({ ...old, page: newPage }));
				}}
				onPageSizeChange={(newPageSize) => {
					console.log("size change");
					setPageState((old) => ({ ...old, pageSize: newPageSize }));
				}}
			/>
		</div>
	);
}
