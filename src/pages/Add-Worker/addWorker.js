import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import ValidationForm from "../../components/forms/amirForm";
import FormDisabledDemo from "../../components/forms/workerForm";
import { getCountries } from "../../services/user/userServices";
import { fetchDataCategories } from "../../services/workersServices/workers";

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
				spacing={0}
				direction="column"
				alignItems="center"
				justifyContent="center"
				style={{ minHeight: "100vh", padding: "2rem" }}
			>
				<Grid item xs={6}>
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
