import { Box } from "@mui/system";
import icon from "../../assets/images/1583388860.png";
import {
	COLOR_PRIME_BLUE,
	COLOR_PRIME_BLUE_LIGHT,
} from "../../constant/constant";

const ProfileBanner = ({ windowSize }) => {
	return (
		<>
			<Box
				sx={{
					position: "relative",
					height: "150px",
					width: "100vw",
					backgroundColor: COLOR_PRIME_BLUE_LIGHT,
				}}
			>
				<Box
					component="img"
					sx={{
						position: "absolute",
						top: "30%",
						left: windowSize[0] > 600 ? "42%" : "28%",
						height: 100,
						width: 100,
						marginRight: 2,
						transform: `translate(${50}px, ${50}px)`,
					}}
					alt="helpersin"
					src={icon}
				/>
			</Box>
		</>
	);
};

export default ProfileBanner;
