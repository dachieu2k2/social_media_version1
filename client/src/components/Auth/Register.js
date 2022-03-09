import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const { username, password, email, confirmPassword } = registerForm;
  const onChangeRegisterForm = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    if (username !== "" && password !== "") {
      //   setRegisterForm({ username: "", password: "",email:'', });
      console.log(registerForm);
    }
  };
  return (
    <form onSubmit={submitForm}>
      <h1>Register</h1>
      <input
        type="text"
        name="username"
        value={username}
        onChange={onChangeRegisterForm}
        placeholder="Enter your username..."
      />

      <input
        type="password"
        name="password"
        value={password}
        onChange={onChangeRegisterForm}
        placeholder="Enter your password..."
      />
      <input
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={onChangeRegisterForm}
        placeholder="Enter your confirm..."
      />
      <input
        type="password"
        name="email"
        value={email}
        onChange={onChangeRegisterForm}
        placeholder="Enter your email..."
      />
      <button type="submit">Register</button>
      <button>
        <Link to="/login">Login</Link>
      </button>
    </form>
  );
};

export default Register;
