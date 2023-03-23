import { useState } from "react";
import AlertModel from "../../components/modles/alertModel";
import EditModal from "../../components/modles/editModel";
import AntdTable from "../../components/tables/antdTable";
import WorkersTable from "../../components/workers/workerTable";
import { deleteWorker } from "../../services/workersServices/workers";

const WorkerList = () => {
	const [alertModal, setAlertModal] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [currentRow, setCurrentRow] = useState(null);

	const deleteTheWorker = async () => {
		console.log("delete func", currentRow);

		let result = await deleteWorker(currentRow.id);
		if (result) {
			console.log(result);
		}
	};

	return (
		<>
			{/* <WorkersTable
				alertModal={alertModal}
				setAlertModal={setAlertModal}
				setCurrentRow={setCurrentRow}
				editModal={editModal}
				setEditModal={setEditModal}
			/> */}
			<AntdTable
				alertModal={alertModal}
				setAlertModal={setAlertModal}
				setCurrentRow={setCurrentRow}
				setEditModal={setEditModal}
			/>
			<AlertModel
				alertModal={alertModal}
				setAlertModal={setAlertModal}
				okFunc={deleteTheWorker}
			/>
			<EditModal
				editModal={editModal}
				setEditModal={setEditModal}
				currentRow={currentRow}
			/>
		</>
	);
};

export default WorkerList;
