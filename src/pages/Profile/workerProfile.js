import { Card, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ProfileBanner from "../../components/banners/profileBanner";
import WorkerDetails from "../../components/lists/workerDetails";
import {
	COLOR_PRIME_BLUE_LIGHT,
	COLOR_PRIME_BLUE,
} from "../../constant/constant";
import { fetchWorker } from "../../services/workersServices/workers";

const WorkerProfile = () => {
	const location = useLocation();
	const [windowSize, setWindowSize] = useState([
		window.innerWidth,
		window.innerHeight,
	]);

	const [currentWorker, setCurrentWorker] = useState({});

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowSize([window.innerWidth, window.innerHeight]);
		};

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	});

	useEffect(() => {
		console.log("location", location.state.id);
		const id = location.state.id;
		async function fetchApi() {
			// console.log("current location from home", center);
			let fetchedWorker = await fetchWorker(id);
			setCurrentWorker(fetchedWorker);
			console.log(fetchedWorker);
		}
		fetchApi();
		console.log("Fetch Worker", currentWorker);
	}, []);

	return (
		<>
			<ProfileBanner windowSize={windowSize} />
			{currentWorker.length > 0 ? (
				<WorkerDetails worker={currentWorker[0]} />
			) : null}
		</>
	);
};

export default WorkerProfile;
