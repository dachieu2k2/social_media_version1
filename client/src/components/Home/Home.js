import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/user";
import "./Home.css";
import Navbar from "./Navbar";
import Loading from "../Loading/Loading";

const Home = () => {
  //user COntext
  const { isLoading } = useContext(UserContext);
  let body;
  if (isLoading) {
    body = <Loading />;
    // console.log("comehere?");
  } else {
    body = (
      <div className="container">
        <Navbar />
        <Outlet />
      </div>
    );
  }

  return body;
};

export default Home;
