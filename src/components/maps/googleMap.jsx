import React, { useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { MarkerF } from "@react-google-maps/api";
// import { useLocation } from "react-router-dom";
import { useCurrentLocation } from "../../hooks/useLocation";
import { useNavigate } from "react-router-dom";
import AntdSearch from "../search/antdSearch";

const libraries = ["places", "marker"];

function MapComponent({ center, workers, windowSize, children }) {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: String(process.env.REACT_APP_GOOGLEMAPS_KEY),
		libraries,
	});
	const containerStyle = {
		width: windowSize > 660 ? "50vw" : "93vw",
		height: windowSize > 660 ? "85vh" : "100vh",
	};
	const navigate = useNavigate();

	const [place, setPlace] = useState(null);
	console.log("current location", center);
	// console.log("lat and lang", status);
	// console.log("lat and lang", lat);
	// console.log("lat and lang", lng);

	const [map, setMap] = React.useState(null);

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, []);

	const defaultMapOptions = {
		fullscreenControl: false,
		mapTypeControl: false,
	};
	return isLoaded ? (
		<GoogleMap
			mapContainerStyle={containerStyle}
			center={center}
			zoom={12}
			options={defaultMapOptions}
		>
			{children}
			{/* Child components, such as markers, info windows, etc. */}
			{workers.map((values, key) => {
				let markerCenter = {
					lat: parseFloat(values.lat),
					lng: parseFloat(values.lng),
				};
				console.log("markers center", markerCenter);
				return (
					<MarkerF
						style={{ zIndex: 1000 }}
						position={markerCenter}
						key={values.id}
						zIndex={1000}
						onClick={() => {
							navigate("/worker-profile", {
								state: { id: values.id },
							});
						}}
					/>
				);
			})}
		</GoogleMap>
	) : (
		<></>
	);
}

export default React.memo(MapComponent);
