import { Outlet } from "react-router-dom";
// import BasicModal from "../components/login/login";
import Navbar from "../components/navbar/navbar";

const LayOut = () => {
	return (
		<div>
			<Navbar />
			<Outlet />
			{/* <BasicModal /> */}
		</div>
	);
};

export default LayOut;
