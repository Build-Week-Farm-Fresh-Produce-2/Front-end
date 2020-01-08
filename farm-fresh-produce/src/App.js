import React from 'react';
import {connect} from 'react-redux';
//react-router

import './App.css';

import Dashboard from './Components/Dashboard';

function App(props) {
  return (
    <div className="App">
      <h1>Farm Fresh Produce</h1>
      <Dashboard user={props.user} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, {})(App);
