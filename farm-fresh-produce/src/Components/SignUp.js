import React, { useState } from "react";
import axiosWithAuth from "../Utils/axiosWithAuth";
import * as yup from "yup";

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
          .put("/api/data", value)
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
    <div class="register-container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={userState.name}
          />
          {errors.name}
        </label>
        <label>
          Email:
          <input
            onChange={handleChange}
            type="text"
            name="email"
            value={userState.name}
          />
          {errors.email}
        </label>
        <label>
          Username:
          <input
            onChange={handleChange}
            type="text"
            name="username"
            value={userState.username}
          />
          {errors.username}
        </label>
        <label>
          Password:
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={userState.password}
          />
          {errors.password}
        </label>
        <label>
          I'm a Farmer:
          <input
            onChange={handleChange}
            type="checkbox"
            name="farmer"
            checked={userState.farmer}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
