import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Nav(props) {
  return (
    <div>
      {
      //<Logo className="placeholder for logo from Web 1"></Logo>
      }
      <h1>Harvest Direct</h1>
      <nav>
        {/* connect to web 1 
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        */}
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
        {props.user.isGrower ? <Link to="/dashboard">Dashboard</Link> : null}
        {props.user ? <Link to="/login">Login</Link> : null}
          
      </nav>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, {})(Nav);
