import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import ordersReducer from "./orders.reducer";

export default combineReducers({
  auth: authReducer,
  orderDetails: ordersReducer
});