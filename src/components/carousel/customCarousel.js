import React from "react";
import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Categories from "../category/categories";
import { Button } from "@mui/material";
import { COLOR_BORDER_BLUE } from "../../constant/constant";
const CustomCarousel = ({ categories, setCurretCategory, curretCategory }) => {
	const caurselStyle = {
		width: "15vw",
	};

	return (
		<div className="slider" style={{ overflow: "hidden", padding: "0.5rem" }}>
			{/* <h3></h3> */}
			<Button
				variant="contained"
				sx={{
					backgroundColor: COLOR_BORDER_BLUE,
					marginLeft: 1,
					marginBottom: 3,
					boxShadow: 15,
					paddingLeft: 3,
					paddingRight: 3,
				}}
			>
				{"Categories"}
			</Button>
			<CarouselProvider
				orientation="vertical"
				naturalSlideWidth={100}
				naturalSlideHeight={30}
				visibleSlides={6}
				isIntrinsicHeight={false}
				totalSlides={categories.length}
				style={caurselStyle}
			>
				<Slider>
					{categories.map((value, i) => {
						return (
							<Slide index={i} key={value.id}>
								<Categories
									category={value.category}
									setCurretCategory={setCurretCategory}
									curretCategory={curretCategory}
								/>
							</Slide>
						);
					})}
				</Slider>
				<div style={{ textAlign: "center", boxShadow: "10" }}>
					<ButtonBack>Back</ButtonBack>
					<ButtonNext>Next</ButtonNext>
				</div>
			</CarouselProvider>
		</div>
	);
};

export default CustomCarousel;
