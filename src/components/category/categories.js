import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import {
	COLOR_BLACK,
	COLOR_BORDER_BLUE,
	COLOR_PRIME_BLUE,
	COLOR_WHITE,
} from "../../constant/constant";
import { fetchDataWorkers } from "../../services/workersServices/workers";
import "./categories";

const Categories = (props) => {
	const [active, setActive] = useState(false);

	const checkIfActive = () => {
		if (props.category == props.currentCategory) return true;
		else return false;
	};
	const categoryBtnSty = {
		maxWidth: "200px",
		maxHeight: "50px",
		minWidth: "110px",
		minHeight: "5px",
		margin: "0.2rem",
		marginLeft: "1rem",
		fontSize: "11px",
		padding: "0.5rem",
		paddingLeft: "1rem",
		paddingRight: "1rem",
		// p: 0.5,
		backgroundColor: COLOR_WHITE,
		color: COLOR_BORDER_BLUE,
		"&:hover": {
			backgroundColor: COLOR_PRIME_BLUE,
			color: COLOR_WHITE,
		},
	};
	const activeSty = {
		maxWidth: "200px",
		maxHeight: "50px",
		minWidth: "110px",
		minHeight: "5px",
		m: 1,
		marginLeft: "1rem",
		// p: 0.5,
		backgroundColor: COLOR_PRIME_BLUE,
		color: COLOR_WHITE,
		boxShadow: 20,
		fontWeight: "Bolder",
		"&:hover": {
			backgroundColor: COLOR_PRIME_BLUE,
			color: COLOR_WHITE,
		},
	};
	const category = props.category;
	useEffect(() => {
		console.log("current category", props.curretCategory);
	});
	return (
		<div className="categories">
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "left",
				}}
			>
				{category.toUpperCase() != props.curretCategory.toUpperCase() ? (
					<Button
						size="small"
						sx={categoryBtnSty}
						variant="outlined"
						onClick={(e) => {
							props.setCurretCategory(e.target.innerText);
							setActive(true);
							console.log("from selecting", e.target.innerText);
						}}
					>
						{category}
					</Button>
				) : (
					<Button
						size="small"
						sx={activeSty}
						variant="contained"
						onClick={(e) => {
							props.setCategory(e.target.innerText);
							setActive(true);
							console.log("from selecting", e.target.innerText);
						}}
					>
						{category}
					</Button>
				)}
			</Box>
		</div>
	);
};

export default Categories;
