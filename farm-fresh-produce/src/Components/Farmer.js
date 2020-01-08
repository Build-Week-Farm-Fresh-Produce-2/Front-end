import React from 'react';
// TODO: set up react-router!!
// import { Link }
import { connect } from "react-redux";
import Inventory from './Inventory';

const Farmer = (props) => {
  return (
    <div>
      <nav>
        <a href="#">View Orders</a>
        <a href="#">Shop</a>
      </nav>
      {
        // <Inventory />
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, {})(Farmer);
