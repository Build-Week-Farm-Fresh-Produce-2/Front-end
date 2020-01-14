import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from "react-redux";
import FarmGoods from './Inventory';
import Orders from './Orders';
import ProduceForm from './ProduceForm';

const Dashboard = (props) => {
  return (
    <div>
    <h1>Welcome to Your Dashboard</h1>
      <Link to="/dashboard/orders">View Orders</Link>
      <Link to="/dashboard/inventory">View Inventory</Link>
      <Route path="/dashboard/inventory" component={FarmGoods} />
      <Route path="/dashboard/form" component={ProduceForm} />
      <Route path="/orders" component={Orders} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, {})(Dashboard);