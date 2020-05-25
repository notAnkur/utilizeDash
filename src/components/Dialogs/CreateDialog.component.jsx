import React from "react";

import {
  makeStyles,
	Button,
	TextField,
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

const CreateDialogComponent = (props) => {
  
  const [orderId, setOrderId] = React.useState(Math.random().toString(20));
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [product, setProduct] = React.useState("");
	const [quantity, setQuantity] = React.useState(0);
  
	const classes = useStyles();

	const handleNameChange = (e) => {
		e.preventDefault();
		setName(e.target.value);
	}
	const handleEmailChange = (e) => {
		e.preventDefault();
		setEmail(e.target.value);
	}
	const handleProductChange = (e) => {
		e.preventDefault();
		setProduct(e.target.value);
	}
	const handleQuantityChange = (e) => {
		e.preventDefault();
		setQuantity(Math.abs(e.target.value));
  }
  
  const resetState = () => {
    setOrderId(Math.random().toString(20));
    setName("");
    setEmail("");
    setProduct("");
    setQuantity(0);
  }

	const handleCreateOrder = () => {
		const newOrder = {
			id: orderId,
			customer_name: name,
			customer_email: email,
			product,
			quantity
    }
    // call create order action
    props.onCreateOrder(newOrder)
    // reset state
    resetState();
    // close dialog
		props.onClose()
	}

	return (
		<Dialog open={props.open} onClose={props.onClose}>
			<DialogTitle  className={classes.dialog} id="form-dialog-title">Edit Order</DialogTitle>
			<DialogContent  className={classes.dialog}>
				<DialogContentText color="textSecondary">
					Make sure to save before closing the dialog.
				</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					id="orderId"
					label="Order ID"
					type="text"
          color="secondary"
					value={orderId}
					contentEditable={false}
					fullWidth
				/>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Customer Name"
					type="text"
          color="secondary"
					value={name}
					onChange={handleNameChange}
					fullWidth
				/>
				<TextField
					autoFocus
					margin="dense"
					id="email"
					label="Customer Email"
					type="email"
          color="secondary"
					value={email}
					onChange={handleEmailChange}
					fullWidth
				/>
				<TextField
					autoFocus
					margin="dense"
					id="product"
					label="Product"
					type="text"
          color="secondary"
					value={product}
					onChange={handleProductChange}
					fullWidth
				/>
				<TextField
					autoFocus
					margin="dense"
					id="quantity"
					label="Quantity"
					type="number"
          color="secondary"
					value={quantity}
					onChange={handleQuantityChange}
					fullWidth
				/>
			</DialogContent>
			<DialogActions className={classes.dialog}>
				<Button onClick={() => props.onClose()} color="secondary">
					Cancel
				</Button>
				<Button onClick={() => handleCreateOrder()} color="secondary">
					Create order
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default CreateDialogComponent;
