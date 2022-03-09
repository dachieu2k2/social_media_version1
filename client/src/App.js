import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Auth/Register";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import UserProvider from "./contexts/user";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="*" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/changeAvatar" element={<Login />}></Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
