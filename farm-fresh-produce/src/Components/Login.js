import React, { useState } from "react";
import { Grid, Button, TextField } from "@material-ui/core";

const Login = props => {
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
    <div style={{ padding: 70 }}>
      <Grid container direction="column" justify="center" alignItems="center">
        <form onSubmit={handleLogin}>
          <Grid container item xs={12} spacing={12}>
            <TextField
              type="text"
              placeholder="username"
              name="username"
              value={userData.username}
              onChange={handleChange}
            />
          </Grid><br></br>
          <Grid container item xs={12} spacing={12}>
            <TextField
              type="password"
              placeholder="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </Grid><br></br>
          <Button variant="contained" type="submit">
            Login
          </Button>
        </form>
      </Grid>
    </div>
  );
};

export default Login;
