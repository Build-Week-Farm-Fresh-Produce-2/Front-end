import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addToInventory, updateInventory } from "../Actions/Actions";

const ProduceForm = props => {
  const [newFruit, setNewFruit] = useState({
    item_name: "",
    price: "",
    quantity: "",
    id: Date.now(),
    user_description: ""
  });

  useEffect(() => {
    if (props.isEditing) {
      setNewFruit(props.itemToEdit);
      console.log("gp: newFruit", newFruit, props.itemToEdit);
    }
  }, [props.isEditing, props.itemToEdit, setNewFruit]);

  const handleSubmit = e => {
    e.preventDefault();
    props.isEditing ? 
    props.updateInventory(newFruit) : 
    props.addToInventory(newFruit);
    setNewFruit({
      item_name: "",
      price: "",
      quantity: "",
      id: Date.now(),
      user_description: ""
    });
    console.log("cj: adding new greens", newFruit);
  };

  const handleChange = e => {
    setNewFruit({
      ...newFruit,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="item_name"
          type="text"
          placeholder="item name"
          onChange={handleChange}
          value={newFruit.item_name}
        />
  { /*     <input
            name="price"
            type="text"
            placeholder="$$"
            onChange={handleChange}
            value={newFruit.price}
          />
    */}
        <input
          name="quantity"
          type="text"
          placeholder="quantity"
          onChange={handleChange}
          value={newFruit.quantity}
        />
        <input
          name="user_description"
          type="text"
          placeholder="describe product"
          onChange={handleChange}
          value={newFruit.user_description}
        />
        <button>
          {props.isEditing ? "Update Item" : "Add Item"}
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  isEditing: state.isEditing,
  itemToEdit: state.itemToEdit
})

export default connect(mapStateToProps, {addToInventory, updateInventory})(ProduceForm)
