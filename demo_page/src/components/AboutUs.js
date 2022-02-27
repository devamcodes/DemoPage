import { Box } from "@mui/material";
import React from "react";
import Details from "./Details";
import Hero from "./Hero";

const AboutUs = () => {
	console.log("aboutus");
	return (
		<>
			<Hero />
			<Details />
			{/* <Box height={"70vh"} /> */}
		</>
	);
};

export default AboutUs;
