import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Input } from "antd";
import { useLogin } from "../../hooks/useLogin";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #000",
	boxShadow: 24,
	p: 4,
	borderRadius: "15px",
	border: "none",
};
const buttonStyles = {
	backgroundColor: "#00a5ba",
	borderColor: "#008988",
	paddingLeft: "1rem",
	paddingRight: "1rem",
	"&:hover": {
		backgroundColor: "#008988",
	},
};

export default function BasicModal() {
	const [open, setOpen] = React.useState(false);
	const [user, setUser] = React.useState({
		email: "@gmail.com",
		password: "password",
	});
	const { login } = useLogin();
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const handleLogin = () => {
		login(user.email, user.password);
	};
	const handleChange = () => {};

	return (
		<div>
			<Button sx={buttonStyles} variant="contained" onClick={handleOpen}>
				Login
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						Login Form
					</Typography>
					<Typography id="modal-modal-description" sx={{ mt: 2 }}>
						<Input
							style={{ marginBottom: "1rem" }}
							value={user.email}
							onChange={hadleChange}
							placeholder="Email Id"
						/>
						<Input
							placeholder="Password"
							value={user.password}
							style={{ marginBottom: "1rem" }}
							onChange={hadleChange}
						/>
						<Button variant="contained" sx={buttonStyles} onClick={handleLogin}>
							Submit
						</Button>
					</Typography>
				</Box>
			</Modal>
		</div>
	);
}
