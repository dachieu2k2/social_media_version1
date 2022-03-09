import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <button>
        <Link to="/changeAvatar">Set avatar</Link>
      </button>
    </div>
  );
};

export default Home;
