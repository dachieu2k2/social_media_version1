import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user";
import "./Auth.css";

const Register = () => {
  //usenavigate
  let navigate = useNavigate();
  //usercontext
  const { register } = useContext(UserContext);
  //register state
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
  const submitForm = async (e) => {
    e.preventDefault();
    if (confirmPassword === password)
      try {
        if (username !== "" && password !== "") {
          //   setRegisterForm({ username: "", password: "",email:'', })
          const response = await register({ password, username, email });
          console.log(response);
          if (response.success) {
            navigate("/changeAvatar");
          }
        }
      } catch (error) {
        console.log(error.message);
      }
  };
  return (
    <form onSubmit={submitForm} className="form__auth-container">
      <h1 className="form__auth-title">Register</h1>
      <div className="form__auth-input-control">
        <input
          type="text"
          name="username"
          value={username}
          onChange={onChangeRegisterForm}
          placeholder="Enter your username..."
          className="form__auth-input"
        />
      </div>
      <div className="form__auth-input-control">
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChangeRegisterForm}
          placeholder="Enter your password..."
          className="form__auth-input"
        />
      </div>
      <div className="form__auth-input-control">
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChangeRegisterForm}
          placeholder="Enter your confirm..."
          className="form__auth-input"
        />
      </div>
      <div className="form__auth-input-control">
        <input
          type="text"
          name="email"
          value={email}
          onChange={onChangeRegisterForm}
          placeholder="Enter your email..."
          className="form__auth-input"
        />
      </div>
      <div className="form__auth-btn-group">
        <button type="submit" className="form__auth-btn">
          Register
        </button>
        <button className="form__auth-btn">
          <Link to="/login">Login</Link>
        </button>
      </div>
    </form>
  );
};

export default Register;
