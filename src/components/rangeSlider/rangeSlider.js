import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useRef, useState, useEffect } from "react";

export default function VerticalSlider({ windowSize, setDistance }) {
	function preventHorizontalKeyboardNavigation(event) {
		if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
			event.preventDefault();
		}
	}

	return (
		<Box sx={{ height: 300 }}>
			{windowSize[0] > 660 ? (
				<Slider
					sx={{
						boxShadow: 20,
						p: 2,
						'& input[type="range"]': {
							WebkitAppearance: "slider-vertical",
						},
					}}
					orientation="vertical"
					defaultValue={5}
					step={1}
					marks
					min={1}
					max={20}
					aria-label="Distance"
					valueLabelDisplay="auto"
					onChange={(e) => {
						// console.log("slider distance value", e.target.value);
						setDistance(e.target.value);
					}}
					onKeyDown={preventHorizontalKeyboardNavigation}
				/>
			) : (
				<Box width={300}>
					{/* <Slider
						size="small"
						defaultValue={70}
						aria-label="Small"
						valueLabelDisplay="auto"
					/> */}
					<Slider
						defaultValue={5}
						step={1}
						marks
						min={1}
						max={20}
						aria-label="Distance"
						valueLabelDisplay="auto"
						onChange={(e) => {
							// console.log("slider distance value", e.target.value);
							setDistance(e.target.value);
						}}
					/>
				</Box>
			)}
		</Box>
	);
}
