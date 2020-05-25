import React from "react";

import {
  makeStyles,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  dialog: {
    backgroundColor: "#333"
  }
}));

const DeleteDialogComponent = (props) => {
  
  const classes = useStyles();
  
  const deleteOrder = (order) => {
    props.onDelete(order)
  }

	return (
		<Dialog open={props.open} onClose={props.onClose}>
			<DialogTitle  className={classes.dialog} id="form-dialog-title">Delete record #{props.order.id}</DialogTitle>
			<DialogContent  className={classes.dialog}>
				<DialogContentText color="textSecondary">
					Are you sure you want to delete the record?
				</DialogContentText>
			</DialogContent>
			<DialogActions className={classes.dialog}>
				<Button onClick={() => props.onClose()} color="secondary">
					Cancel
				</Button>
				<Button onClick={() => deleteOrder(props.order)} color="secondary">
					Yes
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DeleteDialogComponent;
