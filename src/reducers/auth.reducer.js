import { GOOGLE_LOGIN, GOOGLE_LOGIN_FAIL, LOGOUT } from '../actions/types';

const initialState = {
  isLoggedIn: false
}

export default(state=initialState, action) => {
  switch(action.type) {
    case GOOGLE_LOGIN:
      return Object.assign({}, state, {
        ...action.payload
      });
    case GOOGLE_LOGIN_FAIL:
      return Object.assign({}, state, {
        ...action.payload
      });
    case LOGOUT:
      return Object.assign({}, { ...action.payload })
    default:
      return state;
  }
}