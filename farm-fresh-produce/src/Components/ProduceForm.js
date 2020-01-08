import React, { useState } from "react";
import { connect } from "react-redux";
import { addToInventory, updateInventory } from "../Actions/Actions";

const ProduceForm = props => {
  const [newFruit, setNewFruit] = useState({
    name: "",
    price: "",
    unit: "",
    id: Date.now(),
    description: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    props.addToInventory(newFruit);
    props.updateInventory(newFruit);
    setNewFruit({
      name: "",
      price: "",
      unit: "",
      description: ""
    });
    console.log("cj: adding new greens", newFruit);
  };

  const handleChange = e => {
    let name = e.target.value;
    setNewFruit({
      ...newFruit,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <form>
        <input
          name="name"
          type="text"
          placeholder="item name"
          onChange={handleChange}
          value={newFruit.name}
        />
        <input
          name="price"
          type="text"
          placeholder="$$"
          onChange={handleChange}
          value={newFruit.price}
        />
        <input
          name="units"
          type="text"
          placeholder="lbs or oz"
          onChange={handleChange}
          value={newFruit.unit}
        />
        <input
          name="description"
          type="text"
          placeholder="describe product"
          onChange={handleChange}
          value={newFruit.description}
        />
        <button onClick={() => props.updateInventory(props.produce)}>
          Update Inventory
        </button>
      </form>
    </div>
  );
};

export default connect(null, {addToInventory, updateInventory})(ProduceForm)
