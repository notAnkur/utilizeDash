import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { googleLogin } from "../../actions/auth.action";

import {
	makeStyles,
	Container,
	Typography,
	Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	heroContent: {
		padding: theme.spacing(8, 0, 6),
		color: "#fff",
		fontSize: 20,
	},
	heroDescription: {
		color: "rgba(255, 255, 255, 0.6)",
		fontSize: 16,
	},
	heroButtons: {
		marginTop: theme.spacing(4),
	},
	heroImage: {
		marginBottom: 48,
	},
	googleLogin: {
		borderRadius: 3,
		border: 0,
		color: "white",
		height: 48,
		minWidth: 250,
		padding: "0 30px",
		boxShadow: "0 3px 5px 2px rgba(98, 211, 245, .3)",
	}
}));

const HeroLayout = (props) => {
	const classes = useStyles();

	return (
		<div className={classes.heroContent}>
			<Container fixed align="center">
				<img
					className={classes.heroImage}
					alt="bot"
					src={require("../../Assets/admin.png")}
				/>
				<Typography component="h3" variant="h3" align="center" gutterBottom>
					<b>Welcome to the admin portal!</b>
				</Typography>
				<Typography
					variant="h5"
					align="center"
					className={classes.heroDescription}
					paragraph
				>
					Review, edit and create orders
				</Typography>
				<div className={classes.heroButtons}>
					<Button
						variant="contained"
						color="secondary"
						className={classes.googleLogin}
						onClick={() => props.googleLogin(props)}
					>
						Login with google
					</Button>
				</div>
			</Container>
		</div>
	);
}

export default withRouter(connect(null, { googleLogin })(HeroLayout));