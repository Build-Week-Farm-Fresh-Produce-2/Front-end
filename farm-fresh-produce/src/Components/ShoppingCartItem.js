import React from "react";

const Item = props => {
  const item = props.item;
  return (
    <div className="cart">
      <div classname="produce-pic"></div>
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <p>{item.amount}</p>
      <button onClick={() => item.removeCart(item.id)}>Remove</button>
    </div>
  );
};

export default Item;
