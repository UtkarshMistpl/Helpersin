import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({ rows, columns }) {
	const [pageState, setPageState] = React.useState({ page: 0, pageSize: 10 });
	return (
		<div style={{ height: "100vh", width: "100%" }}>
			<DataGrid
				rows={rows}
				columns={columns}
				rowCount={rows.length}
				pageSizeOptions={[10]}
				paginationModel={pageState}
				onPaginationModelChange={() => {
					console.log("pagination ");
				}}
				paginationMode="server"
			/>
		</div>
	);
}
