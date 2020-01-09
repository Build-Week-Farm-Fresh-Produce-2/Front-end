import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ProduceList from './ProduceList';

const Buyer = (props) => {
  return (
    <div>
      <nav>
        <Link to="/cart">View Cart</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>       
      <Route path="/shop" component={ProduceList} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, {})(Buyer);