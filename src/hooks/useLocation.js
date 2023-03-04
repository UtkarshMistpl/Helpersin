import { useEffect } from "react";
import { useState } from "react";

export const useCurrentLocation = () => {
	const [lat, setLat] = useState(null);
	const [lng, setLng] = useState(null);
	const [status, setStatus] = useState("null");

	useEffect(() => {
		console.log("getlocation");
		getLocation();
	}, []);

	const getLocation = () => {
		if (!navigator.geolocation) {
			setStatus("Geolocation is not supported by your browser");
		} else {
			setStatus("Locating...");
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setStatus(null);
					setLat(position.coords.latitude);
					setLng(position.coords.longitude);
				},
				() => {
					setStatus("Unable to retrieve your location");
				}
			);
		}
	};
	return { status, lat, lng, getLocation };
};
