import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const items = {
	Industries: [],
	Services: [],
	Company: ["About", "Careers", "Blog", "Contact Us", "Privacy Policy"],
};
// const pages = ["Industries", "Services", "Company"];
// const settings = ["About", "Careers", "Blog", "Contact Us", "Privacy Policy"];

const NavBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);
	const [menuItem, setMenuItem] = React.useState([]);
	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (page) => {
		setAnchorElUser(page);
		setMenuItem(items[page]);
		console.log("event.target", page);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="static" style={{ backgroundColor: "#fff", color: "black", height: "100px" }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Typography
						variant="h4"
						noWrap
						component="div"
						sx={{ m: 3, display: { xs: "none", md: "flex" }, flexGrow: { xs: "none", md: 10 } }}>
						LOGO
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit">
							{/* <MenuIcon /> */}=
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}>
							{Object.keys(items).map((page, index) => (
								<Box key={index}>
									<MenuItem key={page}>
										<Typography textAlign="center">{page}</Typography>
									</MenuItem>
								</Box>
							))}
						</Menu>
					</Box>
					<Typography
						variant="h4"
						noWrap
						component="div"
						sx={{ flexGrow: 3, display: { xs: "flex", md: "none" } }}>
						LOGO
					</Typography>
					<Box sx={{ flexGrow: 0.5, display: { xs: "none", md: "flex" } }}>
						{Object.keys(items).map((page) => (
							<>
								<Button
									key={page}
									onClick={() => handleOpenUserMenu(page)}
									sx={{ my: 2, color: "black", display: "block" }}>
									{page}
								</Button>
								<Menu
									sx={{ mt: "45px", mr: "260px" }}
									id="menu-appbar"
									anchorEl={anchorElUser}
									anchorOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									keepMounted
									transformOrigin={{
										vertical: "top",
										horizontal: "right",
									}}
									open={Boolean(anchorElUser)}
									onClose={handleCloseUserMenu}>
									{menuItem.length > 0
										? menuItem.map((setting, indexs) => (
												<MenuItem key={setting} onClick={handleCloseUserMenu}>
													<Typography textAlign="center" key={indexs}>
														{setting}
														{/* {console.log(setting)} */}
													</Typography>
												</MenuItem>
										  ))
										: null}
								</Menu>
							</>
						))}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default NavBar;
