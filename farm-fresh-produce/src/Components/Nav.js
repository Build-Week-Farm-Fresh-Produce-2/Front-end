import React from "react";
import { Route } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <Nav>
        <Logo className="placeholder for logo from Web 1"></Logo>
        <NavLinks>
          {/* connect to web 1 */}
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <Users>
            <Route exact path={`/register`}>
              Sign Up
            </Route>
            <Route exact path={`/signin`}>
              Log In
            </Route>
          </Users>
        </NavLinks>
      </Nav>
    </div>
  );
}
