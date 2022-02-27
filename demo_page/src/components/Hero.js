import { Box, Divider, Paper, Typography } from "@mui/material";
import React from "react";

const Hero = () => {
	return (
		<div
			style={{
				height: "auto",
				padding: "50px",
				paddingTop: "150px",
				backgroundImage: `url("https://library.uicore.co/wp-content/uploads/2021/09/chat-bot-hero-bg.webp")`,
			}}>
			<Paper>
				<Typography variant="h5" p={4}>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
					industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
				</Typography>
				<Typography variant="subtitle1" style={{ color: "grey", fontSize: "18px" }} m={3}>
					leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
				</Typography>
				<Divider sx={{ width: "inherit", backgroundColor: "grey", m: 2 }} />
				<Box display={"flex"} flexDirection={"row"} m={4} p={6} justifyContent={"space-evenly"} gap={5}>
					<Box flexGrow={1}>
						<Typography variant={"h4"} m={2}>
							Contrary to popular belief
						</Typography>
						<Typography>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
							and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
						</Typography>
					</Box>
					<Box flexGrow={2}>
						<Typography variant={"h4"} m={2}>
							Contrary to popular belief
						</Typography>
						<Typography>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
							industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
						</Typography>
					</Box>
					{/* </Grid>
				</Grid> */}
				</Box>
			</Paper>
		</div>
	);
};

export default Hero;
