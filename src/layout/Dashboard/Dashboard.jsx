import React, { Fragment, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import clsx from "clsx";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import useDialog from "../../hooks/useDialog";
import CreateDialogComponent from "../../components/Dialogs/CreateDialog.component";
import CardComponent from "../../components/Card/Card.component";
import UserCardComponent from "../../components/Card/UserCard.component";
import { fetchOrders, createOrder } from "../../actions/orders.action";

import {
	makeStyles,
	Grid,
	Paper,
	Typography,
	LinearProgress,
	Button,
	CircularProgress,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		flexShrink: 0,
		marginLeft: theme.spacing(1.5),
		marginRight: theme.spacing(1.5),
		marginTop: theme.spacing(4),
	},
	fixedHeight: {
		height: "auto",
	},
	paper: {
		padding: theme.spacing(4),
		display: "flex",
		overflow: "auto",
		flexDirection: "column",
		backgroundColor: "#24252A",
		boxShadow: theme.shadows[10],
	},
	container: {
		paddingTop: theme.spacing(4),
		paddingBottom: theme.spacing(4),
	},
	linearProgress: {
		boxShadow: "0 0 10px 2px rgba(255, 255, 255, .45)",
	},
	circularProgress: {
		color: "#fff",
		margin: "auto",
		borderRadius: "50%",
		boxShadow: "0 0 20px 5px rgba(255, 255, 255, .45)",
	},
	infoCard: {
		marginBottom: theme.spacing(2),
	},
	paperButton: {
		boxShadow: theme.shadows[16],
		width: "auto",
		marginBottom: theme.spacing(4),
	},
}));

const Dashboard = (props) => {
	const classes = useStyles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	const dialogCreate = useDialog();
	const handleDialogCreate = (newOrder) => props.createOrder(newOrder);

	const [listItems, setListItems] = useState([]);
	const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
	const [currentPointer, setCurrentPointer] = useState(0);

	function fetchMoreListItems() {
		if (true) {
			setListItems((prevState) => [
				...prevState,
				...props.orderState.orders.slice(currentPointer, currentPointer + 20),
			]);
			setCurrentPointer(currentPointer + 20);
		}
		setIsFetching(false);
	}

	// update the lazy load array on state change
	const updateLazyArray = () => {

		const splicedArray = props.orderState.orders.slice(0, listItems.length);

		let areArraysEqual =
			listItems.length === splicedArray.length &&
			listItems.every(function (element, index) {
				return element === splicedArray[index];
			});
		
		if(!areArraysEqual) setListItems(() => [...props.orderState.orders.slice(0, currentPointer)]);
		else return;

	};

	useEffect(() => {
		props.fetchOrders();
	}, []);

	useEffect(() => {
		if (props.orderState.orders) {
			setListItems((prevState) => [
				...prevState,
				...props.orderState.orders.slice(currentPointer, currentPointer + 20),
			]);
			setCurrentPointer(currentPointer + 20);
		}
	}, [props.orderState.orders]);

	return (
		<div className={classes.root}>
			<Grid item xs={6} md={4} lg={3} className={classes.infoCard}>
				<Paper className={fixedHeightPaper}>
					{props.authState.user ? (
						<UserCardComponent user={props.authState.user} />
					) : (
						<LinearProgress
							className={classes.linearProgress}
							color="primary"
						/>
					)}
				</Paper>
			</Grid>

			<Paper className={classes.paper}>
				<Fragment>
					<Typography
						variant="h4"
						color="textPrimary"
						style={{
							textDecorationStyle: "dotted",
							textDecorationLine: "underline",
						}}
						gutterBottom
					>
						Order Details
					</Typography>

					<Button
						variant="contained"
						color="secondary"
						className={classes.paperButton}
						onClick={dialogCreate.onOpen}
					>
						Create New Order
					</Button>

					{props.orderState.orders ? (
						<Grid container spacing={4} justify="center">
							{updateLazyArray()}
							{listItems.map((order) => (
								<Grid key={order.id + "grid"} item xs={12} sm={6} md={4} lg={3}>
									<CardComponent order={order} />
								</Grid>
							))}
							{isFetching && (
								<CircularProgress
									className={classes.circularProgress}
									size={64}
									disableShrink
									thickness={4}
								/>
							)}
						</Grid>
					) : (
						<Paper className={classes.paper}>
							<CircularProgress
								className={classes.circularProgress}
								size={128}
								thickness={2}
							/>
						</Paper>
					)}
				</Fragment>
				<CreateDialogComponent 
					open={dialogCreate.open}
					onClose={dialogCreate.onClose}
					onCreateOrder={handleDialogCreate}
				/>
			</Paper>
		</div>
	);
};

const mapStateToProps = (state) => ({
	authState: state.auth,
	orderState: state.orderDetails,
});

export default withRouter(connect(mapStateToProps, { fetchOrders, createOrder })(Dashboard));
