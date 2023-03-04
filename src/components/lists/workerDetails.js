import { Card, Grid } from "@mui/material";
import { Box } from "@mui/system";

const WorkerDetails = ({ worker }) => {
	// console.log("detail of worker", worker);
	const cardStyle = {
		padding: "0.5rem",
	};

	const mbScreen = 5;
	const deskScreen = 3;
	return (
		<>
			<Box
				sx={{
					justifyContent: "center",
					marginTop: "3rem",
				}}
			>
				<Grid
					container
					spacing={2}
					sx={{ display: "flex", justifyContent: "center" }}
				>
					<Grid item xs={mbScreen} md={3} sx={{ textAlign: "center" }}>
						<Card style={cardStyle}>First Name :</Card>
					</Grid>
					<Grid item xs={1}></Grid>
					<Grid item xs={mbScreen} md={3} sx={{ textAlign: "center" }}>
						<Card style={cardStyle}>{worker.name}</Card>
					</Grid>
					<Grid item xs={12}></Grid>
					<Grid item xs={mbScreen} md={3} sx={{ textAlign: "center" }}>
						<Card style={cardStyle}>Last Name :</Card>
					</Grid>
					<Grid item xs={1}></Grid>
					<Grid item xs={mbScreen} md={3} sx={{ textAlign: "center" }}>
						<Card style={cardStyle}>{worker.last_name}</Card>
					</Grid>
					<Grid item xs={12}></Grid>

					<Grid item xs={mbScreen} md={3} sx={{ textAlign: "center" }}>
						<Card style={cardStyle}>Category :</Card>
					</Grid>
					<Grid item xs={1}></Grid>

					<Grid item xs={mbScreen} md={3} sx={{ textAlign: "center" }}>
						<Card style={cardStyle}>{worker.category}</Card>
					</Grid>
					<Grid item xs={12}></Grid>

					<Grid item xs={mbScreen} md={3} sx={{ textAlign: "center" }}>
						<Card style={cardStyle}>Mobile No :</Card>
					</Grid>
					<Grid item xs={1}></Grid>

					<Grid item xs={mbScreen} md={3} sx={{ textAlign: "center" }}>
						<Card style={cardStyle}>{worker ? worker.mobile : null}</Card>
					</Grid>
					<Grid item xs={12}></Grid>

					<Grid item xs={mbScreen} md={3} sx={{ textAlign: "center" }}>
						<Card style={cardStyle}>Locality :</Card>
					</Grid>
					<Grid item xs={1}></Grid>

					<Grid item xs={mbScreen} md={3} sx={{ textAlign: "center" }}>
						<Card style={cardStyle}>{worker.locality}</Card>
					</Grid>
					<Grid item xs={12}></Grid>

					<Grid item xs={mbScreen} md={3} sx={{ textAlign: "center" }}>
						<Card style={cardStyle}>Details :</Card>
					</Grid>
					<Grid item xs={1}></Grid>

					<Grid item xs={mbScreen} md={3} sx={{ textAlign: "center" }}>
						<Card style={cardStyle}>{worker.detail}</Card>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default WorkerDetails;
