import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { MarkerF } from "@react-google-maps/api";
// import { useLocation } from "react-router-dom";
import { useCurrentLocation } from "../../hooks/useLocation";
import { useNavigate } from "react-router-dom";
const containerStyle = {
	width: "100vw",
	minHeight: "100vh",
};
const libraries = ["places", "marker"];

function MapComponent({ center, workers }) {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPS_KEY,
		libraries,
	});

	const navigate = useNavigate();

	console.log("current location", center);
	// console.log("lat and lang", status);
	// console.log("lat and lang", lat);
	// console.log("lat and lang", lng);

	const [map, setMap] = React.useState(null);

	const onLoad = React.useCallback(function callback(map) {
		// This is just an example of getting and using the map instance!!! don't just blindly copy!
		const bounds = new window.google.maps.LatLngBounds(center);
		map.fitBounds(bounds);

		setMap(map);
	}, []);

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null);
	}, []);

	return isLoaded ? (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
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
