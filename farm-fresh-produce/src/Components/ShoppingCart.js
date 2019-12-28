import React, { useContext } from "react";
import ShoppingContext from "../Contexts/ShoppingContext";
import Item from "./ShoppingCartItem";

export default function ShoppingCart() {
  const { cart, removeItem } = useContext(ShoppingContext);

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
        <Item key={item.id} removeItem={removeItem} {...item} />
      ))}

      <div>
        <p>Total: ${orderTotal()}</p>
        <button>Checkout</button>
      </div>
    </Cart>
  );
}
