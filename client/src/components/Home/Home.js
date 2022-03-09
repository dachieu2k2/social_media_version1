import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Blog from "../Blog/Blog";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="container">
      <Navbar />

      <button>
        <Link to="/changeAvatar">Set avatar</Link>
      </button>
      <Blog />
    </div>
  );
};

export default Home;
