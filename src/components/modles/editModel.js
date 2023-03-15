import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Button, Input, Modal, Typography } from "antd";
import { useState } from "react";

const EditModal = ({ editModal, setEditModal }) => {
	const [user, setUser] = useState({
		email: "email",
	});
	const handleCancel = () => {
		console.log("closed");
		console.log(editModal);

		setEditModal(false);
	};

	const handleOk = () => {
		console.log("closed");
		setEditModal(false);
		console.log(editModal);
		// okFunc();
	};

	const handleChange = () => {
		// console.log(change);
	};

	return (
		<>
			<Modal
				open={editModal}
				onOk={handleOk}
				onCancel={handleCancel}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box>
					<Box sx={{ padding: 2 }}>
						<Grid container spacing={2}>
							<Grid item xs={6}>
								<Input
									style={{ marginBottom: "1rem" }}
									value={user.email}
									name="name"
									onChange={handleChange}
									placeholder="Email Id"
								/>
							</Grid>
							<Grid item xs={6}>
								<Input
									style={{ marginBottom: "1rem" }}
									value={user.email}
									name="name"
									onChange={handleChange}
									placeholder="Email Id"
								/>
							</Grid>
							<Grid item xs={6}>
								<Input
									style={{ marginBottom: "1rem" }}
									value={user.email}
									name="name"
									onChange={handleChange}
									placeholder="Email Id"
								/>
							</Grid>
							<Grid item xs={6}>
								<Input
									style={{ marginBottom: "1rem" }}
									value={user.email}
									name="name"
									onChange={handleChange}
									placeholder="Email Id"
								/>
							</Grid>
							<Grid item xs={6}>
								<Input
									style={{ marginBottom: "1rem" }}
									value={user.email}
									name="name"
									onChange={handleChange}
									placeholder="Email Id"
								/>
							</Grid>
							<Grid item xs={6}>
								<Input
									style={{ marginBottom: "1rem" }}
									value={user.email}
									name="name"
									onChange={handleChange}
									placeholder="Email Id"
								/>
							</Grid>
							<Grid item xs={6}>
								<Input
									style={{ marginBottom: "1rem" }}
									value={user.email}
									name="name"
									onChange={handleChange}
									placeholder="Email Id"
								/>
							</Grid>
						</Grid>
					</Box>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}></Typography>
				</Box>
			</Modal>
		</>
	);
};

export default EditModal;
