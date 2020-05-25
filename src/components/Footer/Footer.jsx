import React from "react";

import {
	makeStyles,
	Container,
	Typography
} from "@material-ui/core";

function Copyright() {
	return (
		<Typography
			variant="caption"
			align="left"
			style={{ color: "rgba(255,255,255,0.6)" }}
		>
			{"Copyright © "}
			{new Date().getFullYear()}
			{" Company"}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	footerTitle: {
		fontSize: 24
	},
	footer: {
		background: "#17181b",
		width: "100%",
		color: "#fff",
		borderTop: `1px solid ${theme.palette.divider}`,
		marginTop: theme.spacing(8),
		paddingTop: theme.spacing(3),
		paddingBottom: theme.spacing(3),
		[theme.breakpoints.up("sm")]: {
			paddingTop: theme.spacing(6),
			paddingBottom: theme.spacing(6),
		},
	}
}));

export default function Footer() {
	const classes = useStyles();

	return (
		<>
			<Container maxWidth={false} align="center" component="footer" className={classes.footer}>
				<div>
					<Typography
						variant="h4"
						className={classes.footerTitle}
						gutterBottom
					>
						Admin dashboard Inc.
					</Typography>
					<Copyright />
				</div>
			</Container>
		</>
	);
}
