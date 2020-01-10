import React from "react";

const Produce = props => {
  const item = props.item;
  return (
    <div className="produce">
      <img alt={item.name} src={"placeholder for now"}></img>
      <h3 className="name">{item.name}</h3>
      <p className="price">{item.price}</p>
      <p className="unit">{item.unit}</p>
      <p className="deets">{item.description}</p>
      { /* <button onClick={() => props.addToCart(item)}>
        Add to cart
      </button>     */  }
    </div>
  );
};

export default Produce