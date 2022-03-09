import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user";

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
        type="text"
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
