import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
	return (
		<>
			<Box style={{ color: "#fff", backgroundColor: "black" }} p={3}>
				<Grid container columns={{ xs: 4, md: 16 }}>
					<Grid item xs={10} md={4}>
						<Box>Logo</Box>
						<Box textAlign={{ xs: "left", md: "center" }} m={{ xs: 3 }}>
							<Typography textAlign={"left"} mt={5}>
								Contact Info
							</Typography>
							<Typography textAlign={"left"}>Contact Info</Typography>
							<Typography textAlign={"left"}>Contact Info</Typography>
						</Box>
					</Grid>
					<Grid item xs={10} md={4}>
						<Box textAlign={{ xs: "left", md: "center" }} m={{ xs: 3 }}>
							<Typography variant="h6"> Industries</Typography>
							<Typography>Some Text</Typography>
							<Typography>Some Text</Typography>
							<Typography>Some Text</Typography>
							<Typography>Some Text</Typography>
							<Typography>Some Text</Typography>
						</Box>
					</Grid>
					<Grid item xs={10} md={4}>
						<Box textAlign={{ xs: "left", md: "center" }} m={{ xs: 3 }}>
							<Typography variant="h6">Services</Typography>
							<Typography>Some Text</Typography>
							<Typography>Some Text</Typography>
							<Typography>Some Text</Typography>
						</Box>
					</Grid>
					<Grid item xs={10} md={4}>
						<Box textAlign={{ xs: "left", md: "center" }} m={{ xs: 3 }}>
							<Typography variant="h6">Company</Typography>
							<Typography>About US</Typography>
							<Typography>Careers</Typography>
							<Typography>Blog</Typography>
							<Typography>Contact Us</Typography>
							<Typography>Priovacy Policy</Typography>
						</Box>
					</Grid>
					<Divider sx={{ width: "inherit", backgroundColor: "#fff", m: 2 }} />
					<Box width={"100%"}>
						<Typography textAlign={"center"}>CopyRight Line</Typography>
					</Box>
				</Grid>
			</Box>
		</>
	);
};

export default Footer;
