import { useState } from "react";

import { Autocomplete } from "@react-google-maps/api";

import { Box } from "@mui/material";
import { Input } from "antd";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
const libraries = ["places", "marker"];

const AntdSearch = ({ setCenter, setAddress, address, customStyle }) => {
	const [autocomplete, setAutocomplete] = useState(null);
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: String(process.env.REACT_APP_GOOGLEMAPS_KEY),
		libraries,
	});
	// const { ref, autocompleteRef } = usePlacesWidget({
	// 	apiKey: process.env.REACT_APP_GOOGLEMAPS_KEY,
	// 	onPlaceSelected: (place) => {},
	// });
	// console.log(ref);

	// console.log(autocompleteRef);

	const onLoad = (autocomplete) => {
		console.log("autocomplete: ", autocomplete);

		setAutocomplete(autocomplete);
	};

	const onPlaceChanged = () => {
		if (autocomplete !== null) {
			const place = autocomplete.getPlace();
			console.log("places autoComplete", place);
			setAddress(place.formatted_address);

			setCenter({
				lat: place.geometry.location.lat(),
				lng: place.geometry.location.lng(),
			});
		} else {
			console.log("Autocomplete is not loaded yet!");
		}
	};
	//Autocomplete
	return (
		isLoaded && (
			<Box sx={{ marginRight: { sm: "1rem" } }}>
				<Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
					<Input
						type="text"
						name="locality"
						value={address}
						onChange={(e) => {
							setAddress(e.target.value);
						}}
						style={customStyle}
					/>
				</Autocomplete>
			</Box>
		)
	);
};

export default AntdSearch;
