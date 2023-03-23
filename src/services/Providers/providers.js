import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../../context/AuthContext";
import { store } from "../../redux/store/store";

const Providers = ({ children }) => {
	return (
		<div className="Providers">
			<Provider store={store}>
				<AuthContextProvider>
					<BrowserRouter>{children}</BrowserRouter>
				</AuthContextProvider>
			</Provider>
		</div>
	);
};

export default Providers;
