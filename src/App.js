import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import firebaseConfig from './firebase.config';
import firebase from 'firebase/app';
import store from './store';

import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar/Navbar";
import HeroLayout from "./layout/Hero/Hero.layout";
import Dashboard from "./layout/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";

firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
            <Route exact path="/" component={HeroLayout} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
