import React, { useContext } from "react";
import ShoppingContext from "../Contexts/ShoppingContext";

const Item = props => {
  const { removeItem } = useContext(ShoppingContext);

  return (
    <div className="cart">
      <div classname="produce-pic"></div>
      <h3>{props.name}</h3>
      <p>${props.price}</p>
      <p>{props.amount}</p>
      <button onClick ={()=> removeItem(props.id)}>Remove</button>
    </div>
  );
};

export default Item