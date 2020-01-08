import React from "react";

const Produce = props => {
  return (
    <div className="produce">
      <img src={"placeholder for now"}></img>
      <h3 className="name">{props.produce.name}</h3>
      <p className="price">{props.produce.price}</p>
      <p className="unit">{props.produce.unit}</p>
      <p className="deets">{props.produce.description}</p>
      {/* <button onClick={() => props.addToCart(props.produce)}>
        Add to cart
      </button>       */}
    </div>
  );
};

export default Produce