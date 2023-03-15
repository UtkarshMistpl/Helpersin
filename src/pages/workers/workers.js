import { useState } from "react";
import AlertModel from "../../components/modles/alertModel";
import EditModal from "../../components/modles/editModel";
import WorkersTable from "../../components/workers/workerTable";
import { deleteWorker } from "../../services/workersServices/workers";

const WorkerList = () => {
	const [alertModal, setAlertModal] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [currentRow, setCurrentRow] = useState(null);

	const deleteTheWorker = async () => {
		console.log("delete func", currentRow);

		let result = await deleteWorker(currentRow);
		if (result) {
			console.log(result);
		}
	};

	return (
		<>
			<WorkersTable
				alertModal={alertModal}
				setAlertModal={setAlertModal}
				setCurrentRow={setCurrentRow}
				editModal={editModal}
				setEditModal={setEditModal}
			/>
			<AlertModel
				alertModal={alertModal}
				setAlertModal={setAlertModal}
				okFunc={deleteTheWorker}
			/>
			<EditModal editModal={editModal} setEditModal={setEditModal} />
		</>
	);
};

export default WorkerList;
