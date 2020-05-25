import { FETCH_ORDERS, EDIT_ORDER, DELETE_ORDER, CREATE_ORDER } from "./types";

export const fetchOrders = () => dispatch => {
  console.log("initiate fetchOrders");
  const orders = require("../Assets/DummyData.json");
  dispatch({
    type: FETCH_ORDERS,
    payload: orders
  })
}

export const editOrder = (edittedOrder) => dispatch => {
  console.log("initiate editOrder");
  dispatch({
    type: EDIT_ORDER,
    payload: edittedOrder
  });
}

export const deleteOrder = (order) => dispatch => {
  console.log("initiate deleteOrder");
  dispatch({
    type: DELETE_ORDER,
    payload: order
  });
}

export const createOrder = (newOrder) => dispatch => {
  console.log("initiate createOrder");
  dispatch({
    type: CREATE_ORDER,
    payload: newOrder
  });
}