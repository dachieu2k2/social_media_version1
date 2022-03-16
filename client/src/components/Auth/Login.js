import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/user";
import "./Auth.css";

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
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={submitForm} className="form__auth-container">
      <h1 className="form__auth-title">Login</h1>
      <div className="form__auth-input-control">
        <input
          type="text"
          name="username"
          value={username}
          onChange={onChangeLoginForm}
          placeholder="Enter your username..."
          className="form__auth-input"
        />
      </div>
      <div className="form__auth-input-control">
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChangeLoginForm}
          placeholder="Enter your password..."
          className="form__auth-input"
        />
      </div>

      <div className="form__auth-btn-group">
        <button type="submit" className="form__auth-btn">
          Login
        </button>
        <button className="form__auth-btn">
          <Link to="/register">Register</Link>
        </button>
      </div>
    </form>
  );
};

export default Login;
