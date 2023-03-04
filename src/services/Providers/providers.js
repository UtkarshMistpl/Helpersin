import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../../context/AuthContext";

const Providers = ({ children }) => {
	return (
		<div className="Providers">
			<AuthContextProvider>
				<BrowserRouter>{children}</BrowserRouter>
			</AuthContextProvider>
		</div>
	);
};

export default Providers;
