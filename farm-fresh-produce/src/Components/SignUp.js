import React, { useState } from "react";
import { axiosWithAuth } from "../Utils/axiosWithAuth";
import * as yup from "yup";
import { Grid, Button, TextField } from "@material-ui/core";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .trim(),
  email: yup
    .string()
    .required("email is required")
    .trim(),
  username: yup
    .string()
    .required("create a username")
    .trim(),
  password: yup
    .string()
    .required("password must be 6 characters")
    .min(6)
});

const SignUp = () => {
  const [userState, setUserState] = useState({
    username: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userState, "handleSubmit Ran");
    schema
      .validate(userState, { abortEarly: false })
      .then(function(value) {
        axiosWithAuth()
          .post("/auth/register", value)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      })
      .catch(function(err) {
        const newErrors = {};
        for (const error of err.inner) {
          if (!newErrors[error.path]) {
            newErrors[error.path] = error.message;
          }
        }
        setErrors(newErrors);
      });
  };

  console.log(errors);

  const handleChange = e => {
    const newUserState = { ...userState };
    newUserState[e.target.name] = e.target.value;
    setUserState(newUserState);
  };

  return (
    <div className="register-container" style={{ padding: 60 }}>
      <Grid container direction="column" justify="center" alignItems="center">
        <form onSubmit={handleSubmit}>
          <Grid container item xs={12} spacing={12}>
            <label>
              Name:  
              <TextField
                onChange={handleChange}
                type="text"
                name="name"
                value={userState.name}
              />
              {errors.name}
            </label>
          </Grid><br/>
          <Grid container item xs={12} spacing={12}>
            <label>
              Email:   
              <TextField
                onChange={handleChange}
                type="text"
                name="email"
                value={userState.email}
              />
              {errors.email}
            </label>
          </Grid><br/>
          <Grid container item xs={12} spacing={12}>
            <label>
              Username:  
              <TextField
                onChange={handleChange}
                type="text"
                name="username"
                value={userState.username}
              />
              {errors.username}
            </label>
          </Grid><br/>
          <Grid container item xs={12} spacing={12}>
            <label>
              Password:  
              <TextField
                onChange={handleChange}
                type="password"
                name="password"
                value={userState.password}
              />
              {errors.password}
            </label>
          </Grid><br/>
          <Grid container item xs={12} spacing={12}>
            <label>
              I'm a Farmer: 
              <input
                onChange={handleChange}
                type="checkbox"
                name="farmer"
                checked={userState.farmer}
              />
            </label>
          </Grid><br/>
          <Button variant="contained" type="submit">Submit</Button>
        </form>
      </Grid>
    </div>
  );
};

export default SignUp;
