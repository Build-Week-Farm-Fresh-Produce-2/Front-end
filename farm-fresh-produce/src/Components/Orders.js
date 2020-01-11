import React from "react";
import { connect } from "react-redux";

const Orders = props => {
  let emptyCart = false;
  if (props.orders.length === 0) {
    emptyCart = true;
  }
  return (
    <div className="orders">
      {emptyCart && <h2>No Order History</h2>}
      {props.orders.map(item => {
        return (
          <div key={item.id}>
            <a href="#" className="order-list">
              <span>{item.order_date}</span>
              <span>{item.delivery_date}</span>
              <span>{item.user_id}</span>
            </a>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state =>{
    return{
        orders: state.orders,
        user: state.user
    }
}

export default connect(mapStateToProps, {})(Orders);