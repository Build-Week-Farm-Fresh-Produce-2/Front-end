import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  addToInventory,
  getInventory,
  removeInventory,
  updateInventory
} from "../Actions/Actions";

const FarmGoods = props => {
  let produce = props.produce;
  const getInventory = props.getInventory;
  useEffect(() => {
    getInventory();
  }, [getInventory]);

  return (
    <div>
      {produce.map(inventory => {
        return (
          <div className="prod-card">
            <h3>Name: {inventory.name}</h3>
            <p>Description: {inventory.description}</p>
            <p>Quantity: {inventory.quantity}</p>
            <p>Price: ${inventory.price}</p>
            <button onClick={updateInventory}>Update</button><br/>
            <button onClick={addToInventory}>Add Inventory</button><br/>
            <button onClick={removeInventory}>Delete</button><br/>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  produce: state.produce
});

export default connect(mapStateToProps, { updateInventory, addToInventory, getInventory, removeInventory })(FarmGoods);
