import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import {
	makeStyles,
	AppBar,
	Toolbar,
	Typography,
	Button,
	Menu,
	MenuItem,
	IconButton,
	Avatar
} from "@material-ui/core";

import { googleLogin, logout } from "../../actions/auth.action";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(3),
		width: "100%",
	},
	navbarTitle: {
		fontSize: 24,
		marginRight: 48,
		textDecoration: "none",
		color: "#fff",
	},
	navLinks: {
		fontSize: 14,
		marginRight: 20,
		color: "rgba(255,255,255,0.7)",
		textDecoration: "none",
		"&:hover": {
			color: "rgba(255, 255, 255, 1)",
		},
	},
	toolbarItemsLeft: {
		marginRight: "auto",
	},
	toolbarItemsRight: {
		marginLeft: "auto",
	},
	loginButton: {
		background: "linear-gradient(45deg, #24252a 30%, #24252a 90%)",
		borderRadius: 4,
		border: 0,
		color: "white",
		height: 44,
		padding: "0 20px",
		boxShadow: "0 3px 5px 2px rgba(98, 211, 245, .45)",
	},
	loginMenuItems: {
		backgroundColor: "#24252a",
		color: "rgba(255,255,255,0.6)",
	},
	sectionDesktop: {
		display: "none",
		[theme.breakpoints.up("md")]: {
			display: "flex",
		},
	},
	sectionMobile: {
		marginLeft: 10,
		display: "flex",
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
	menuItem: {
		color: "#24252a",
		textDecoration: "none"
	}
}));

const Navbar = (props) => {
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleLogout = () => {
		//call the logout action
		props.logout(props);
		//close the profile menu
		setAnchorEl(null);
	}

	// account menu
	const menuId = "primary-search-account-menu";
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: "top", horizontal: "center" }}
			getContentAnchorEl={null}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem className={classes.menuItem} disabled>
				{
					props.authState.user 
					?	(`Welcome ${props.authState.user.displayName}! 👋`)
					:	(`Loading...`)
				}
			</MenuItem>
			<MenuItem onClick={handleMenuClose}>
				<Link to="/dashboard" className={classes.menuItem}>
					Dashboard
				</Link>
			</MenuItem>
			<MenuItem className={classes.menuItem} onClick={() => handleLogout()}>
				Logout
			</MenuItem>
		</Menu>
	);

	return (
		<div>
			<AppBar position="static" elevation={10} color="primary">
				<Toolbar>
					<Typography display="inline" type="title">
						<Link to="/" className={classes.navbarTitle}>
							<b>Admin</b>
						</Link>
					</Typography>
					{ props.authState.isLoggedIn ? (
						<div
							className={classes.toolbarItemsRight}
							onClick={handleProfileMenuOpen}
						>
							<IconButton
								aria-label="account of current user"
								aria-controls="primary-search-account-menu"
								aria-haspopup="true"
								color="inherit"
							>
								{
									props.authState.user
										? <Avatar alt="Remy Sharp" src={props.authState.user.photoURL} />
										: <Avatar>props.authState.user.displayName[0]</Avatar>
								}
							</IconButton>
						</div>
					) : (
						<div className={classes.toolbarItemsRight}>
							<Button
								className={classes.loginButton}
                onClick={() => props.googleLogin(props)}
							>
								Login with Google
							</Button>
						</div>
					)}
				</Toolbar>
			</AppBar>
			{renderMenu}
		</div>
	);
}

const mapStateToProps = state => ({
  authState: state.auth
});

export default withRouter(connect(mapStateToProps, { googleLogin, logout })(Navbar));