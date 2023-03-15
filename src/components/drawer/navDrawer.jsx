import {
	Drawer,
	List,
	ListItemButton,
	ListItemText,
	ListItemIcon,
	Divider,
	Menu,
	MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import BasicModal from "../login/login";
import CustomLogout from "../logout/logout";
import { useNavigate } from "react-router-dom";
import AntdMenu from "../menus/antdMenu";
import { Typography } from "antd";
const DrawerComp = ({ user }) => {
	const [openDrawer, setOpenDrawer] = useState();

	// code to create submenu in Reactjs
	// const [anchorElNav, setAnchorElNav] = React.useState(null);
	// const [anchorElUser, setAnchorElUser] = React.useState(null);

	// const handleOpenNavMenu = (event) => {
	// 	setAnchorElNav(event.currentTarget);
	// };
	// const handleOpenUserMenu = (event) => {
	// 	setAnchorElUser(event.currentTarget);
	// };

	// const handleCloseNavMenu = () => {
	// 	setAnchorElNav(null);
	// };

	// const handleCloseUserMenu = () => {
	// 	setAnchorElUser(null);
	// };

	const Pages = ["Home", "Workers", "Add Worker", "Add Category"];
	// const pages = ["r1", "r3", "r5"];
	const routes = ["", "workers", "add-worker", "category"];
	const navigate = useNavigate();
	return (
		<>
			<Drawer
				open={openDrawer}
				onClose={() => {
					setOpenDrawer(false);
				}}
			>
				<List>
					<ListItemButton
						key={5}
						onClick={() => {
							setOpenDrawer(false);
						}}
					>
						<ListItemIcon>
							<ListItemText>Helpersin</ListItemText>
						</ListItemIcon>
					</ListItemButton>
					<Divider variant="middle" light={false} />

					{Pages.map((page, index) => {
						if (!(page == "Workers" && !user)) {
							return (
								<ListItemButton
									key={index}
									onClick={() => {
										// setOpenDrawer(false);
										// let route = Object.keys(page);
										navigate(routes[index]);
									}}
								>
									<ListItemIcon>
										<ListItemText>{page}</ListItemText>
									</ListItemIcon>
								</ListItemButton>
							);
						}
					})}
					{/* <ListItemButton onClick={handleOpenNavMenu}>Menu</ListItemButton> */}
					<ListItemButton>
						{!user ? <BasicModal /> : <CustomLogout />}
					</ListItemButton>

					{/* <Menu
						id="menu-appbar"
						anchorEl={anchorElNav}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "left",
						}}
						keepMounted
						transformOrigin={{
							vertical: "top",
							horizontal: "left",
						}}
						open={Boolean(anchorElNav)}
						onClose={handleCloseNavMenu}
						sx={{
							display: { xs: "block", md: "none" },
						}}
					>
						{pages.map((page) => (
							<MenuItem key={page} onClick={handleCloseNavMenu}>
								<Typography textAlign="center">{page}</Typography>
							</MenuItem>
						))}
					</Menu> */}
				</List>
			</Drawer>
			<MenuIcon
				onClick={() => {
					setOpenDrawer(!openDrawer);
				}}
				sx={{ marginLeft: "1rem" }}
			/>
		</>
	);
};

export default DrawerComp;
