import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Button, Input, Modal, Typography } from "antd";
import { useEffect, useState } from "react";
import { Descriptions } from "antd";
import { editWorkerData } from "../../services/workersServices/workers";

const EditModal = ({ editModal, setEditModal, currentRow }) => {
	const [user, setUser] = useState({
		firstName: "",
		lastName: "",
		category: "",
		country: "",
		locality: "",
		details: "",

		email: "",
	});
	const handleCancel = () => {
		console.log("closed");
		console.log(currentRow);

		setEditModal(false);
	};

	const handleOk = async () => {
		console.log("closed");
		setEditModal(false);
		let result = await editWorkerData(user);
		console.log("edit :", result);
		console.log(currentRow);
		// okFunc();
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	const ParahForedit = (text) => {
		return <p style={{ margin: "0" }}>{text}</p>;
	};

	useEffect(() => {
		currentRow &&
			setUser({
				firstName: currentRow.name,
				lastName: currentRow.last_name,
				category: currentRow.category,
				country: currentRow.country,
				locality: currentRow.locality,
				details: currentRow.detail,
				email: currentRow.email,
				id: currentRow.id,
			});
	}, [currentRow]);
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
								{ParahForedit("First Person")}
								<Input
									style={{ marginBottom: "1rem" }}
									value={user.firstName}
									name="firstName"
									onChange={handleChange}
									placeholder="First Name"
								/>
							</Grid>
							<Grid item xs={6}>
								{ParahForedit("Last Name")}

								<Input
									style={{ marginBottom: "1rem" }}
									value={user.lastName}
									name="lastName"
									onChange={handleChange}
									placeholder="Last Name"
								/>
							</Grid>
							<Grid item xs={6}>
								{ParahForedit("Email")}

								<Input
									style={{ marginBottom: "1rem" }}
									value={user.email}
									name="email"
									onChange={handleChange}
									placeholder="Email Id"
								/>
							</Grid>
							<Grid item xs={6}>
								{ParahForedit("Category")}

								<Input
									style={{ marginBottom: "1rem" }}
									value={user.category}
									name="name"
									onChange={handleChange}
									placeholder="Category"
								/>
							</Grid>
							<Grid item xs={6}>
								{ParahForedit("Country")}

								<Input
									style={{ marginBottom: "1rem" }}
									value={user.country}
									name="country"
									onChange={handleChange}
									placeholder="Country"
								/>
							</Grid>
							<Grid item xs={6}>
								{ParahForedit("Details")}

								<Input
									style={{ marginBottom: "1rem" }}
									value={user.details}
									name="name"
									onChange={handleChange}
									placeholder="Details"
								/>
							</Grid>
							<Grid item xs={6}>
								{ParahForedit("Locality")}

								<Input
									style={{ marginBottom: "1rem" }}
									value={user.locality}
									name="locality"
									onChange={handleChange}
									placeholder="Locality"
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
