import React from "react";

import {
  makeStyles,
  Grid,
  Avatar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardTitle: {
		color: "rgba(255, 255, 255, 0.8)",
		marginTop: theme.spacing(1),
		marginLeft: theme.spacing(4),
	},
	avatarLarge: {
		width: theme.spacing(7),
		height: theme.spacing(7),
	},
}));

const UserCardComponent = (props) => {

  const classes = useStyles();

	return (
		<Grid container direction="row" alignItems="center">
			<Grid item>
				<Avatar
					alt="Remy Sharp"
					src={props.user.photoURL}
					className={classes.avatarLarge}
				/>
			</Grid>
			<Grid item>
				<Typography
					component="h2"
					variant="h5"
					className={classes.cardTitle}
					gutterBottom
				>
					Hey {props.user.displayName}!{" "}
					<span role="img" aria-label="hey">
						👋
					</span>
				</Typography>
			</Grid>
		</Grid>
	);
};

export default UserCardComponent;