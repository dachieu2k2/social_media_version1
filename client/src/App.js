import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./components/Auth/Register";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import UserProvider from "./contexts/user";
import ChangeAvatar from "./components/Auth/ChangeAvatar";
import Setting from "./components/Setting/Setting";
import Blog from "./components/Blog/Blog";
import MyBlog from "./components/MyBlog/MyBlog";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="my_blog" element={<MyBlog />} />

            <Route path="home" element={<Blog />} />
            <Route path="setting" element={<Setting />} />
          </Route>

          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/changeAvatar" element={<ChangeAvatar />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
