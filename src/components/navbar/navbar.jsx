import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/material";
import icon from "../../assets/images/HelpersIn_Logo.png";
import { useAuthContext } from "../../hooks/useAuthContext";
import BasicModal from "../login/login";

const Navbar = () => {
	const { user } = useAuthContext();
	return (
		<>
			<AppBar position="sticky" sx={{ bgcolor: "#008988" }}>
				<Toolbar>
					<Box
						component="img"
						sx={{
							height: 45,
							width: 50,
							marginRight: 2,
						}}
						alt="helpersin"
						src={icon}
					/>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Helpersin
					</Typography>
					{!user ? <BasicModal /> : null}
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;

// 5:30 cenatur
