import React from "react";
import { connect } from "react-redux";
import Item from "./ShoppingCartItem";
import { addToCart, removeCart} from "../Actions/Actions";

const ShoppingCart = props => {
  const cart = props.cart;
  const orderTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <Cart>
      {cart.map(item => (
        <Item key={item.id} removeCart={props.removeCart} {...item} />
      ))}

      <div>
        <p>Total: ${orderTotal()}</p>
        <button>Checkout</button>
      </div>
    </Cart>
  );
};

mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps, { addToCart, removeCart })(ShoppingCart);
