import { Route, Routes } from "react-router-dom";
import LayOut from "../Layout/layout";
import Home from "../pages/Home/home";
import WorkerProfile from "../pages/Profile/workerProfile";
// import routes from "./routes";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<LayOut />}>
				<Route index element={<Home />} />
				<Route path="worker-profile" element={<WorkerProfile />} />
			</Route>
		</Routes>
	);
};

export default Router;
