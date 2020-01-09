import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      {
      //<Logo className="placeholder for logo from Web 1"></Logo>
      }
      <h1>Market Direct</h1>
      <nav>
        {/* connect to web 1 */}
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">View Cart</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}


          // <Users>
          //   <Route exact path={`/register`}>
          //     Sign Up
          //   </Route>
          //   <Route exact path={`/signin`}>
          //     Log In
          //   </Route>
          // </Users>