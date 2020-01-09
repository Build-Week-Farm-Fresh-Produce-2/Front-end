import React from 'react';
import { Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';

import Dashboard from './Components/Dashboard';

function App(props) {
  return (
    <div className="App">
      <h1>Farm Fresh Produce</h1>
      <Link to="dashboard">Dashboard</Link>
      <Route path="/dashboard"><Dashboard user={props.user} /></Route>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, {})(App);
