import React from 'react';
// TODO: set up react-router!!
// import { Link }
import { connect } from "react-redux";
import ProduceList from './ProduceList';

const Buyer = (props) => {
  return (
    <div>
      <nav>
        <a href="#">View Cart</a>
        <a href="#">Checkout</a>
      </nav>
      {        
      <ProduceList />
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, {})(Buyer);