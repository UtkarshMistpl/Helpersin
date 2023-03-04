// import { Search } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CustomCarousel from "../../components/carousel/customCarousel";
// import { useLocation } from "react-router-dom";
import MapComponent from "../../components/maps/googleMap";
import VerticalSlider from "../../components/rangeSlider/rangeSlider";
import PlaceSearch from "../../components/search/PlaceSearch";
import SearchBar from "../../components/search/searchBar";
import { useCurrentLocation } from "../../hooks/useLocation";
import {
	fetchDataCategories,
	fetchDataWorkers,
} from "../../services/workersServices/workers";
const Home = () => {
	const { status, lat, lng, getLocation } = useCurrentLocation();
	const [center, setCenter] = useState();
	const location = useLocation();
	const [categories, setCategories] = useState([]);
	const [distance, setDistance] = useState(5);
	const [curretCategory, setCurretCategory] = useState("Carpenter");
	const [workers, setWorkers] = useState([]);
	const [windowSize, setWindowSize] = useState([
		window.innerWidth,
		window.innerHeight,
	]);

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
		console.log("location", location);
	}, [location]);

	useEffect(() => {
		async function fetchApi() {
			console.log("current location from home", center);
			let fetchWorkers = await fetchDataWorkers(
				curretCategory,
				center,
				distance
			);
			setWorkers(fetchWorkers);
			// console.log(fetchWorkers);
		}
		fetchApi();
		console.log("home cur category", curretCategory);
	}, [center, curretCategory, distance]);

	useEffect(() => {
		async function fetchApi() {
			let fetchCategories = await fetchDataCategories();
			setCategories(fetchCategories);
		}
		fetchApi();
	}, []);

	useEffect(() => {
		setCenter({
			lat: lat,
			lng: lng,
		});
		console.log("Status changing", status);
	}, [status]);

	return (
		<>
			<Box
				sx={{
					paddingTop: "3.5rem",
					position: "relative",
				}}
			>
				<Box
					sx={
						windowSize[0] > 660
							? { position: "absolute", top: "0%", zIndex: -1 }
							: { position: "absolute", top: "400px", zIndex: -1 }
					}
				>
					{workers ? <MapComponent center={center} workers={workers} /> : null}
				</Box>
				<Box
					sx={{
						width: "100%",
						position: "absolute",
						top: windowSize[0] > 660 ? "80px" : "10px",
						left: "0%",
						zIndex: 900,
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "space-around",
					}}
				>
					<CustomCarousel
						categories={categories}
						setCurretCategory={setCurretCategory}
						curretCategory={curretCategory}
					/>

					{/* <PlaceSearch /> */}
					<SearchBar setCenter={setCenter} />
				</Box>
				<Box
					sx={{
						position: "absolute",
						top: windowSize[0] > 660 ? "200px" : "340px",
						right: windowSize[0] > 660 ? "100px" : "50px",
						zIndex: 1000,
					}}
				>
					<VerticalSlider windowSize={windowSize} setDistance={setDistance} />
				</Box>
			</Box>
		</>
	);
};

export default Home;
