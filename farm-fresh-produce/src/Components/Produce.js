import React from "react";
import {Card} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    background: '#F9931D',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px #AC54AE',
    color: '#5A5A5A',
    height: 160,
    width: 300,
    padding: '0 30px',
    marginTop: '5px',
    flexWrap: 'wrap',
  },
});

const Produce = props => {
  const item = props.item;
  const classes=useStyles();
  return (
    <div className="produce" style={{padding: 15, diplay: "flex", flexWrap: "wrap"}}>
      <Card variant="outlined" className={classes.root}>
        {/* <img alt={item.name} src={"placeholder for now"}></img> */}
        <h3 className="name">{item.name}</h3>
        <p className="price">{item.price}</p>
        <p className="unit">{item.unit}</p>
        <p className="deets">{item.description}</p>
        {  <button onClick={() => props.addToCart(item)}>
          Add to cart
          </button>       }
      </Card>
    </div>
  );
};

export default Produce