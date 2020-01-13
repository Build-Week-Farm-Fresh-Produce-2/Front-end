import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";

// ACTIONS
import { login } from "./Actions/Actions";

// COMPONENTS
import PrivateRoute from "./Utils/PrivateRoute";
import Nav from "./Components/Nav";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import ProduceList from "./Components/ProduceList";
import ShoppingCart from "./Components/ShoppingCart";
import harvest from "./img/HarvestDirect-logo.jpg";

function App(props) {
  return (
    <div className="App">
      <div>
        <img src={harvest} alt="vehicle" width="40%" />
        <Route path="/" component={Nav} />
        <Switch>
          <PrivateRoute exact path="/shop" component={ProduceList} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/cart" component={ShoppingCart} />
          <Route path="/login">
            <Login login={props.login} />
          </Route>
          <Route path="/register" component={SignUp} />
        </Switch>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, { login })(App);
