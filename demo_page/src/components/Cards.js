import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
const useStyles = makeStyles((theme) => ({
	outerDiv: {
		marginTop: "20px",

		borderRadius: "2%",
		boxShadow: "1px 1px 1px 1px grey",
		flex: 1,
		gap: 3,
		display: "flex",
		resizeMode: "contain",
		"&:hover": {
			boxShadow: "2px 2px 2px 2px grey ",
		},
	},
}));

const Cards = ({ childText, Title, ml }) => {
	const classes = useStyles();
	return (
		<Box className={classes.outerDiv} ml={ml}>
			<Box height={"100%"} m={1}>
				<CheckCircleTwoToneIcon />
			</Box>
			<Box>
				<Typography variant="h6" textAlign={"left"}>
					{Title}
				</Typography>
				<Typography variant="subtitle1" style={{ color: "grey", fontSize: "17px" }} pr={1}>
					{childText}
				</Typography>
			</Box>
		</Box>
	);
};

export default Cards;
