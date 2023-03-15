import { Button } from "@mui/material";

const CustomButton = ({ children, onPress }) => {
	const buttonStyles = {
		backgroundColor: "#00a5ba",
		borderColor: "#008988",
		paddingLeft: "1rem",
		paddingRight: "1rem",
		"&:hover": {
			backgroundColor: "#008988",
		},
	};

	return (
		<>
			<Button variant="contained" style={buttonStyles} onClick={onPress}>
				{children}
			</Button>
		</>
	);
};

export default CustomButton;
