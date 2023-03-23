import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material//TextField";
import {
	COLOR_BLACK,
	COLOR_PRIME_BLUE,
	COLOR_WHITE,
} from "../../constant/constant";
import { usePlacesWidget } from "react-google-autocomplete";
import Autocomplete from "react-google-autocomplete";
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from "use-places-autocomplete";
import { Box } from "@mui/material";

const SearchBar = ({ setCenter }) => {
	// const { ref, autocompleteRef } = usePlacesWidget({
	// 	apiKey: process.env.REACT_APP_GOOGLEMAPS_KEY,
	// 	onPlaceSelected: (place) => {},
	// });
	// console.log(ref);
	const onPlaceSelected = async (place) => {
		// formatted_address: "Indore, Madhya Pradesh, India";
		console.log("selected  place", place.geometry.location.lat);
		const result = await getGeocode({ address: place.formatted_address });
		const { lat, lng } = getLatLng(result[0]);
		console.log("curerent latitue", lng);
		setCenter({
			lat: place.geometry.location.lat(),
			lng: place.geometry.location.lng(),
		});
	};

	// console.log(autocompleteRef);

	return (
		<Box sx={{ marginTop: "1rem", marginRight: { sm: "1rem" } }}>
			<Autocomplete
				apiKey={process.env.REACT_APP_GOOGLEMAPS_KEY}
				onPlaceSelected={onPlaceSelected}
				style={{ padding: "0.75rem", width: "230px" }}
			/>
			{/* <IconButton type="button" aria-label="search">
				<SearchIcon style={{ fill: "blue" }} />
			</IconButton> */}
		</Box>
	);
};

export default SearchBar;
