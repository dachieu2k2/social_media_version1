import React from "react";
import { Outlet } from "react-router-dom";
import "./Home.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="container">
      <Navbar />

      <Outlet />
    </div>
  );
};

export default Home;
