import React, { useState } from "react";
import {axiosWithAuth} from "../Utils/axiosWithAuth";

const Login = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });

  const handleLogin = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/auth/login", userData)
      .then(res => {
        localStorage.setItem("Authorization", res.data.token);
        console.log(res.data);
      })
      .catch(err => console.log(err));

    console.log(userData);
  };

  const handleChange = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="username"
          name="username"
          value={userData.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
