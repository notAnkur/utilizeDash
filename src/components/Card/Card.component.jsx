import React from "react";
import { connect } from "react-redux";
import EditDialogComponent from "../Dialogs/EditDialog.component";
import DeleteDialogComponent from "../Dialogs/DeleteDialog.component";
import useDialog from "../../hooks/useDialog";
import { editOrder, deleteOrder } from "../../actions/orders.action";

import {
  makeStyles,
  IconButton,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Avatar
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    backgroundColor: "#24252A",
    boxShadow: theme.shadows[10]
  }
}));

const CardComponent = (props) => {

  const classes = useStyles();

  const { order } = props;

  const dialogEdit = useDialog();
  const dialogDelete = useDialog();

  const handleDialogEdit = edittedOrder => props.editOrder(edittedOrder);
  const handleDialogDelete = order => props.deleteOrder(order);

	return (
    <div>
      <Card key={order.id} className={classes.paper}>
        <CardHeader
          avatar={
            <Avatar aria-label="avatar" className={classes.avatar}>
              { order.customer_name[0] }
            </Avatar>
          }
          title={ order.customer_name }
          subheader={ order.customer_email }
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Order ID: { order.id }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Product: { order.product }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Quantity: { order.quantity }
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="edit" onClick={dialogEdit.onOpen}>
            <EditIcon style={{ fill: "rgba(255, 255, 255, 0.6)" }} />
          </IconButton>
          <IconButton aria-label="delete" onClick={dialogDelete.onOpen}>
            <DeleteIcon style={{ fill: "rgba(255, 255, 255, 0.6)" }} />
          </IconButton>
        </CardActions>
      </Card>

      <EditDialogComponent
        open={dialogEdit.open}
        onClose={dialogEdit.onClose}
        order={order}
        onEdit={handleDialogEdit}
      />
      <DeleteDialogComponent
        open={dialogDelete.open}
        onClose={dialogDelete.onClose}
        order={order}
        onDelete={handleDialogDelete}
      />
    </div>
	);
};

export default connect(null, { editOrder, deleteOrder })(CardComponent);