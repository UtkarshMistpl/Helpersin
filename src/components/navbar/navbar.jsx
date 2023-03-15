import { Logout } from "@mui/icons-material";
import {
	AppBar,
	Button,
	MenuItem,
	Tab,
	Tabs,
	Toolbar,
	Typography,
} from "@mui/material";
import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/images/HelpersIn_Logo.png";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import CustomButton from "../button/customButton";
import DrawerComp from "../drawer/navDrawer";
import BasicModal from "../login/login";
import CustomLogout from "../logout/logout";

const Pages = ["Home", "Workers", "Add Worker", "Add Category"];
const routes = ["", "workers", "add-worker", "category"];

const Navbar = () => {
	const { user } = useAuthContext();
	const { logout } = useLogout();
	const [currentTab, setCurrentTab] = useState(0);
	const navigate = useNavigate();
	const handleChange = (e, value) => {
		console.log(value);
		navigate(routes[e.key]);
	};
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
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						{Pages.map((row, i) => {
							if (!(row == "Workers" || row == "Add Category") || user)
								return <Tab key={i} label={row} onClick={handleChange} />;
						})}
					</Box>
					<Box sx={{ display: { xs: "none", sm: "block" } }}>
						{!user ? <BasicModal /> : <CustomLogout />}
					</Box>
					<Box sx={{ display: { sm: "none" } }}>
						<DrawerComp user={user} />
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Navbar;

// 5:30 cenatur
