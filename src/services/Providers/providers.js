import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../../context/AuthContext";
import { store } from "../../redux/store/store";
import { CategoryContextProvider } from "../../context/CategoryContext";

const Providers = ({ children }) => {
	return (
		<div className="Providers">
			<Provider store={store}>
				<AuthContextProvider>
					<CategoryContextProvider>
						<BrowserRouter>{children}</BrowserRouter>
					</CategoryContextProvider>
				</AuthContextProvider>
			</Provider>
		</div>
	);
};

export default Providers;
