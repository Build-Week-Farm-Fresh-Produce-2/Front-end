import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  addToInventory,
  getInventory,
  removeInventory,
  editItem
} from "../Actions/Actions";

const FarmGoods = props => {
  let inventory = props.inventory;
  const getInventory = props.getInventory;
  useEffect(() => {
    console.log("Rendering Inventory")
    getInventory();
  }, [getInventory]);

  const handleUpdate = (item) => {
    props.editItem(item);


    // props.history.push("/dashboard/form");
  }
  return (
    <div>
      <button onClick={() => {props.history.push("/dashboard/form")}}>Add To Inventory</button><br/>
      {inventory.map(item => {
        return (
          <div key={item.produce_id} className="prod-card">
            <h3>Name: {item.item_name}</h3>
            <p>Description: {item.user_description}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
            <button onClick={()=>{handleUpdate(item)}}>Update</button><br/>
            <button onClick={removeInventory}>Delete</button><br/>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  inventory: state.inventory
});

export default connect(mapStateToProps, { editItem, addToInventory, getInventory, removeInventory })(FarmGoods);
