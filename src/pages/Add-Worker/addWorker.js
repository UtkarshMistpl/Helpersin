import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import ValidationForm from "../../components/forms/amirForm";
import FormDisabledDemo from "../../components/forms/workerForm";
import { getCountries } from "../../services/user/userServices";
import { fetchDataCategories } from "../../services/workersServices/workers";
import icon from "../../assets/images/worker-1.png";
import FilterForm from "../../components/forms/filterForm/filterForm";

const AddWorker = () => {
	const [categories, setCategories] = useState([]);
	const [countries, setCountires] = useState([]);
	useEffect(() => {
		async function fetchApi() {
			let categoryArr = [];
			let fetchCategories = await fetchDataCategories();
			// fetchCategories.map((value, i) => {
			// 	categoryArr[i] = {
			// 		value: value.category,
			// 		label: value.category,
			// 	};
			// });
			setCategories(fetchCategories);
			console.log("category array", fetchCategories);
		}
		fetchApi();
	}, []);

	useEffect(() => {
		async function fetchApi() {
			let countryArr = [];
			let fetchCountries = await getCountries();
			// fetchCountries.map((value, i) => {
			// 	countryArr[i] = {
			// 		value: value.country_name,
			// 		label: value.country_name,
			// 	};
			// });
			setCountires(fetchCountries.countries);
			console.log(fetchCountries);
		}
		fetchApi();
	}, []);
	return (
		<>
			<Grid
				container
				spacing={2}
				alignItems="center"
				style={{ minHeight: "100vh", padding: "2rem" }}
			>
				<Grid item xs={12} sm={6}>
					<Box
						component="img"
						sx={{
							height: 200,
							marginBottom: { sm: "5rem" },
							marginLeft: { sm: "5rem" },
							display: { xs: "none", sm: "block" },
						}}
						alt="helpersin"
						src={icon}
					/>
				</Grid>
				<Grid item xs={12} sm={4}>
					{/* <FormDisabledDemo
						categories={categories && categories}
						countries={countires}
					/> */}
					<ValidationForm
						categories={categories && categories}
						countries={countries}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default AddWorker;
