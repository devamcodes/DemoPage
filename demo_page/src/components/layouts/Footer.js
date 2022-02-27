import { Box, Divider, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	// outerDiv: {
	// 	marginTop: "20px",

	// 	borderRadius: "2%",
	// 	boxShadow: "1px 1px 1px 1px grey",
	// 	flex: 1,
	// 	gap: 3,
	// 	display: "flex",
	// 	resizeMode: "contain",
	// 	"&:hover": {
	// 		boxShadow: "2px 2px 2px 2px grey ",
	// 	},
	// },
	outerDiv: {
		color: "#fff",
		backgroundColor: "black",
	},
	child: {
		"&:hover": {
			color: "cyan",
		},
	},
}));
const Footer = () => {
	const classes = useStyles();
	const navigate = useNavigate();
	return (
		<>
			<Box className={classes.outerDiv} p={3}>
				<Grid container columns={{ xs: 4, md: 16 }}>
					<Grid item xs={10} md={4}>
						<Box>Logo</Box>
						<Box textAlign={{ xs: "left", md: "center" }} m={{ xs: 3 }}>
							<Typography textAlign={"left"} mt={5} className={classes.child}>
								Contact Info
							</Typography>
							<Typography textAlign={"left"} className={classes.child}>
								Contact Info
							</Typography>
							<Typography textAlign={"left"} className={classes.child}>
								Contact Info
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={10} md={4}>
						<Box textAlign={{ xs: "left", md: "center" }} m={{ xs: 3 }}>
							<Typography variant="h6"> Industries</Typography>
							<Typography className={classes.child}>Some Text</Typography>
							<Typography className={classes.child}>Some Text</Typography>
							<Typography className={classes.child}>Some Text</Typography>
							<Typography className={classes.child}>Some Text</Typography>
							<Typography className={classes.child}>Some Text</Typography>
						</Box>
					</Grid>
					<Grid item xs={10} md={4}>
						<Box textAlign={{ xs: "left", md: "center" }} m={{ xs: 3 }}>
							<Typography variant="h6">Services</Typography>
							<Typography className={classes.child}>Some Text</Typography>
							<Typography className={classes.child}>Some Text</Typography>
							<Typography className={classes.child}>Some Text</Typography>
						</Box>
					</Grid>
					<Grid item xs={10} md={4}>
						<Box textAlign={{ xs: "left", md: "center" }} m={{ xs: 3 }}>
							<Typography variant="h6">Company</Typography>
							<Typography className={classes.child} onClick={() => navigate("/about-us")}>
								About US
							</Typography>
							<Typography className={classes.child}>Careers</Typography>
							<Typography className={classes.child}>Blog</Typography>
							<Typography className={classes.child}>Contact Us</Typography>
							<Typography className={classes.child}>Priovacy Policy</Typography>
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
