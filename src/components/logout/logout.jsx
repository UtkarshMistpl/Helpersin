import { useLogout } from "../../hooks/useLogout";
import CustomButton from "../button/customButton";

const CustomLogout = () => {
	const { logout } = useLogout();
	return (
		<>
			<CustomButton onPress={logout}>Logout</CustomButton>
		</>
	);
};

export default CustomLogout;
