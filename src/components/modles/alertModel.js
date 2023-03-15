import { Box } from "@mui/system";
import { Button, Modal, Typography } from "antd";

const AlertModel = ({ alertModal, setAlertModal, okFunc }) => {
	const handleCancel = () => {
		console.log("closed");
		console.log(alertModal);

		setAlertModal(false);
	};

	const handleOk = () => {
		console.log("closed");
		setAlertModal(false);
		console.log(alertModal);
		okFunc();
	};

	return (
		<>
			<Modal
				open={alertModal}
				onOk={handleOk}
				onCancel={handleCancel}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Are you sure you want to delete the worker profile
					</Typography>
				</Box>
			</Modal>
		</>
	);
};

export default AlertModel;
