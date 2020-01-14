import React from "react";

const Item = props => {
  const item = props.item;
  return (
    <div className="cart">
      <div className="produce-pic"></div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>${item.price}</p>
      <p>{item.item_quantity}</p>
      <button onClick={() => props.removeCart(item.id)}>Remove</button>
    </div>
  );
};

export default Item;
