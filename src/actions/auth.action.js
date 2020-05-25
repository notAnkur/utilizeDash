import { GOOGLE_LOGIN, GOOGLE_LOGIN_FAIL, LOGOUT } from "./types";
import * as firebase from 'firebase/app';
import 'firebase/auth';

export const googleLogin = (props) => dispatch => {
  console.log('initiate google login')
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      firebase.auth().signInWithPopup(provider)
        .then((result) => {
          dispatch({
            type: GOOGLE_LOGIN,
            payload: { isLoggedIn: true, ...result }
          })
          props.history.push("/dashboard")
        })
        .catch(error => {
          console.log(error)
          if(error) {
            dispatch({
              type: GOOGLE_LOGIN_FAIL,
              payload: { isLoggedIn: false, ...error }
            })
            props.history.push("/")
          }
        })
    })
}

export const logout = (props) => dispatch => {
  console.log("initiate logout");
  firebase.auth().signOut().then(function() {
    dispatch({
      type: LOGOUT,
      payload: { isLoggedIn: false }
    });
    props.history.push("/");
  }).catch(function(error) {
    // An error happened.
    console.log("Cant logout");
  });
}