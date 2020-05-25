import { FETCH_ORDERS, EDIT_ORDER, DELETE_ORDER, CREATE_ORDER } from "../actions/types";

const initialState = {
  orders: null
}

const findItemIndex = (array, item) => {
  return array.findIndex(order => order.id === item.id);
}

export default(state=initialState, action) => {
  switch(action.type) {

    case FETCH_ORDERS:
      return Object.assign({}, state, {
        orders: action.payload
      });

    case EDIT_ORDER:
      const edittedIndex = findItemIndex(state.orders, action.payload);
      state.orders[edittedIndex] = action.payload;
      return Object.assign({}, state);

    case DELETE_ORDER:
      const orderIndex = findItemIndex(state.orders, action.payload);
      const orderState = state.orders;
      orderState.splice(orderIndex, 1);
      return Object.assign({}, {
        orders: orderState
      });

    case CREATE_ORDER:
      console.log(action.payload)
      return Object.assign({}, {
        orders: [action.payload, ...state.orders]
      });

    default:
      return state;
  }
}