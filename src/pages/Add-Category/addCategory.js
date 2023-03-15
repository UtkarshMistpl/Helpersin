import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Alert, Input } from "antd";
import { useEffect, useState } from "react";
import CustomButton from "../../components/button/customButton";
import {
	addNewCategory,
	fetchDataCategories,
} from "../../services/workersServices/workers";
const buttonStyles = {
	backgroundColor: "#00a5ba",
	borderColor: "#008988",
	paddingLeft: "1.5rem",
	paddingRight: "1.5rem",
	paddingTop: "0",
	paddingBottom: "0",
	"&:hover": {
		backgroundColor: "#008988",
	},
};
const AddCategory = () => {
	const [categories, setCategories] = useState([]);
	const [category, setCategory] = useState("");
	const [error, setError] = useState("");
	const [message, setMessage] = useState("");
	useEffect(() => {
		async function fetchApi() {
			let fetchCategories = await fetchDataCategories();
			setCategories(fetchCategories);
		}
		fetchApi();
	}, []);

	const handleCategory = async () => {
		console.log("submited category");
		let response = await addNewCategory(category);
		setError(response.status);
		setMessage(response.message);
	};

	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "center",
					m: 4,
				}}
			>
				{/* <Input placeholder="Category" /> */}
				<TextField
					id="outlined-basic"
					label="Category"
					value={category}
					onChange={(e) => {
						setCategory(e.target.value);
					}}
					variant="outlined"
					size="small"
					sx={{ m: 2 }}
				/>
				{/* <CusButton>{"Add"}</CustomButton> */}
				<Box sx={{ m: 2 }}>
					<CustomButton onPress={handleCategory}>{"Add "}</CustomButton>
				</Box>
			</Box>
			<Box
				sx={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}
			>
				{message && <Alert message={message} type={error} closable />}
			</Box>
			<Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
				{categories.map((row, i) => (
					<Button
						variant="outlined"
						sx={{ m: { xs: 0.5, sm: 2 } }}
						key={row.id}
					>
						{row.category}
					</Button>
				))}
			</Box>
		</>
	);
};

export default AddCategory;
