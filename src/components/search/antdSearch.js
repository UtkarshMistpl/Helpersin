import { useState } from "react";

import { usePlacesWidget } from "react-google-autocomplete";
import { Autocomplete } from "@react-google-maps/api";

import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from "use-places-autocomplete";
import { Box } from "@mui/material";
import { Input } from "antd";

const AntdSearch = ({ setCenter, setAddress, address }) => {
	const [autocomplete, setAutocomplete] = useState(null);

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
		setAddress(place.formatted_address);
	};

	// console.log(autocompleteRef);

	const onLoad = (autocomplete) => {
		console.log("autocomplete: ", autocomplete);

		setAutocomplete(autocomplete);
	};

	const onPlaceChanged = () => {
		if (autocomplete !== null) {
			const place = autocomplete.getPlace();
			console.log("places autoComplete", place);
			setCenter({
				lat: place.geometry.location.lat(),
				lng: place.geometry.location.lng(),
			});
			setAddress(place.formatted_address);
		} else {
			console.log("Autocomplete is not loaded yet!");
		}
	};
	//Autocomplete
	return (
		<Box sx={{ marginRight: { sm: "1rem" } }}>
			<Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
				<Input type="text" name="locality" value={address} />
			</Autocomplete>
		</Box>
	);
};

export default AntdSearch;
