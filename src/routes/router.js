import { Navigate, Route, Routes } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import LayOut from "../Layout/layout";
import AddCategory from "../pages/Add-Category/addCategory";
import AddWorker from "../pages/Add-Worker/addWorker";
import Home from "../pages/Home/home";
import WorkerProfile from "../pages/Profile/workerProfile";
import WorkerList from "../pages/workers/workers";
// import routes from "./routes";

const Router = () => {
	const user = useAuthContext();
	return (
		<Routes>
			<Route path="/" element={<LayOut />}>
				<Route index element={<Home />} />
				<Route path="worker-profile" element={<WorkerProfile />} />
				<Route path="add-worker" element={<AddWorker />} />
				<Route
					path="workers"
					element={
						user.user ? <WorkerList /> : <Navigate replace={true} to="/" />
					}
				/>
				<Route
					path="category"
					element={
						user.user ? <AddCategory /> : <Navigate replace={true} to="/" />
					}
				/>
			</Route>
		</Routes>
	);
};

export default Router;
