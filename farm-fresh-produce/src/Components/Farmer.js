import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from "react-redux";
import Inventory from './Inventory';
import Orders from './Orders';

const Farmer = (props) => {
  return (
    <div>
      <nav>
        <Link to="/dashboard/orders">View Orders</Link>
        <Link to="/dashboard/inventory">View Inventory</Link>
        <Link to="/shop">Shop</Link>
      </nav>
      <Route path="/inventory" component={Inventory} />
      <Route path="/orders" component={Orders} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, {})(Farmer);
