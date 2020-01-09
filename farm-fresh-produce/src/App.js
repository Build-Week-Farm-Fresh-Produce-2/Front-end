import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';

// COMPONENTS
import Nav from './Components/Nav';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import ProduceList from './Components/ProduceList';
import ShoppingCart from './Components/ShoppingCart';

function App(props) {
  return (
    <div className="App">
      <Route path="/" component={Nav} />
      <Route path="/dashboard"><Dashboard user={props.user} /></Route>
      <Route path="/register" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route exact path="/shop" component={ProduceList} />
      <Route exact path="/cart" component={ShoppingCart} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, {})(App);
