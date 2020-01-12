import React, {useEffect} from "react";
import { connect } from "react-redux";
import Item from "./ShoppingCartItem";
import { getCart, removeCart} from "../Actions/Actions";

const ShoppingCart = props => {
  let cart = props.cart
  const getCart = props.getCart;
  const orderTotal = () => {
    return cart
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };
  useEffect(() => {
    getCart(1);
  }, [getCart])
  return (
    <div>
      {cart.map(item => (
        <Item key={item.id} removeCart={props.removeCart} item={item} />
      ))}

      <div>
        <p>Total: ${orderTotal()}</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(mapStateToProps, { getCart, removeCart })(ShoppingCart);
