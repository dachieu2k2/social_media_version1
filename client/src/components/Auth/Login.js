import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/user";

const Login = () => {
  //navigate
  //useContext
  const { login } = useContext(UserContext);
  //loginState
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = loginForm;
  const onChangeLoginForm = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      if (username !== "" && password !== "") {
        const response = await login(loginForm);
        setLoginForm({ username: "", password: "" });
        console.log(loginForm);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={submitForm}>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        value={username}
        onChange={onChangeLoginForm}
        placeholder="Enter your username..."
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChangeLoginForm}
        placeholder="Enter your password..."
      />
      <button type="submit">Login</button>
      <button>
        <Link to="/register">Register</Link>
      </button>
    </form>
  );
};

export default Login;
