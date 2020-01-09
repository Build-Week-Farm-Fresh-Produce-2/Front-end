import React, { useState } from "react";

const Login = (props) => {
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });

  const handleLogin = e => {
    e.preventDefault();
    props.login(userData);
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

