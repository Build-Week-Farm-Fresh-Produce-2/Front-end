import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from "react-redux";
import Inventory from './Inventory';
import Orders from './Orders';

const Dashboard = (props) => {
  return (
    <div>
    <h1>Welcome to Your Dashboard</h1>
      <Link to="/dashboard/orders">View Orders</Link>
      <Link to="/dashboard/inventory">View Inventory</Link>
      <Route path="/inventory" Component={Inventory} />
      <Route path="/orders" Component={Orders} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, {})(Dashboard);