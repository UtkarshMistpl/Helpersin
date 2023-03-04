import { Wrapper } from "@googlemaps/react-wrapper";

const MyMapComponent = () => {};
const MyApp = () => (
	<Wrapper apiKey={process.env.REACT_APP_GOOGLEMAPS_KEY}>
		<MyMapComponent />
	</Wrapper>
);
