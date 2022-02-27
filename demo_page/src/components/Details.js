import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Cards from "./Cards";

const CardItems = [
	{
		title: "Title One",
		subTitle:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
	},
	{
		title: "Title Two",
		subTitle:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
	},
	{
		title: "Title Three",
		subTitle:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
	},
	{
		title: "Title Four",
		subTitle:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
	},
	{
		title: "Title Five",
		subTitle:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
	},
];
const Details = () => (
	<>
		<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, md: 12 }}>
			{/* <Box flexDirection={"row"} m={6}> */}
			<Grid item xs={12} md={6}>
				<Box flexGrow={1} maxWidth={"100%"} textAlign={"center"}>
					<Typography variant="h4" mb={3} mt={3}>
						Left Section
					</Typography>
					<Typography variant="subtitle1" style={{ color: "grey", fontSize: "17px" }}>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
						industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not only five centuries
					</Typography>
					<Box>
						<img
							src="https://www.datalabelify.com/wp-content/uploads/2021/12/about-us-labelify.jpg"
							alt=""
							style={{
								marginTop: "20px",
								borderRadius: "2%",
								boxShadow: "2px 2px 2px 2px grey",
								flex: 1,
								width: "90%",
								height: "100%",
								resizeMode: "contain",
							}}
						/>
					</Box>
				</Box>
			</Grid>
			<Grid item xs={12} md={6}>
				<Box name="right-section" flexGrow={2} m={(1, 3)}>
					<Typography variant="h4" m={3}>
						Right section
					</Typography>
					{CardItems.map((item, index) => (
						<Cards Title={item.title} childText={item.subTitle} ml={index % 2 === 0 ? null : 3} />
					))}
				</Box>
			</Grid>
			{/* </Box> */}
		</Grid>
	</>
);

export default Details;
