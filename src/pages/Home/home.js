// import { Search } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CustomCarousel from "../../components/carousel/customCarousel";
import Categories from "../../components/category/categories";
// import { useLocation } from "react-router-dom";
import MapComponent from "../../components/maps/googleMap";
import VerticalSlider from "../../components/rangeSlider/rangeSlider";
import AntdSearch from "../../components/search/antdSearch";
import PlaceSearch from "../../components/search/PlaceSearch";
import SearchBar from "../../components/search/searchBar";
import { useCurrentLocation } from "../../hooks/useLocation";
import {
	fetchDataCategories,
	fetchDataWorkers,
} from "../../services/workersServices/workers";
import FilterForm from "../../components/forms/filterForm/filterForm";
const Home = () => {
	const { status, lat, lng, getLocation } = useCurrentLocation();
	const [address, setAddress] = useState(null);
	const [center, setCenter] = useState(null);
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
					width: "100%",
				}}
			>
				<Box
					sx={
						windowSize[0] > 660
							? {
									position: "absolute",
									top: "0",
									display: "flex",
									justifyContent: "right",
									width: "100%",
							  }
							: {
									position: "absolute",
									top: "600px",
									display: "flex",
									justifyContent: "center",
									width: "100%",
							  }
					}
				>
					{workers ? (
						<MapComponent
							center={center}
							workers={workers}
							windowSize={windowSize[0]}
						/>
					) : null}
				</Box>
				<Box
					sx={{
						position: "absolute",
						top: windowSize[0] > 660 ? "50px" : "10px",
						left: "0%",
						display: "flex",
						flexWrap: "wrap",
						flexDirection: windowSize[0] > 660 ? "column" : "row",
						height: "100vh",
						paddingLeft: "3rem",
					}}
				>
					{/* {categories.map((value, i) => {
						return (
							<Categories
								category={value.category}
								setCurretCategory={setCurretCategory}
								curretCategory={curretCategory}
							/>
						);

					})} */}
					{center && (
						<FilterForm
							categories={categories && categories}
							setCurretCategory={setCurretCategory}
							setCenter={setCenter}
							setDistance={setDistance}
						/>
					)}

					{/* <CustomCarousel
						categories={categories}
						setCurretCategory={setCurretCategory}
						curretCategory={curretCategory}
						windowSize={windowSize[0]}
					/> */}

					{/* <PlaceSearch /> */}
				</Box>
				<Box
					sx={{
						position: "absolute",
						top: windowSize[0] > 660 ? "15px" : "620px",
						right: windowSize[0] > 660 ? "600px" : null,
						left: !(windowSize[0] > 660) ? "40px" : "450px",
						zIndex: 1000,
					}}
				>
					<SearchBar
						setCenter={setCenter}
						customStyle={{
							padding: "0.8rem",
							paddingLeft: "2rem",
							paddingRight: "1rem",
						}}
					/>
					{/* <AntdSearch
						setCenter={setCenter}
						setAddress={setAddress}
						address={address}
					/> */}
				</Box>

				<Box
					sx={{
						position: "absolute",
						top: windowSize[0] > 660 ? "200px" : "680px",
						right: windowSize[0] > 660 ? "100px" : "30px",
						zIndex: 1000,
						display: "flex",
						justifyContent: "center",
					}}
				>
					<VerticalSlider windowSize={windowSize} setDistance={setDistance} />
				</Box>
			</Box>
		</>
	);
};

export default Home;
