import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/pexels-vincent-ma-janssen-1310777.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div
        className="home"
        style={{ backgroundImage: `url(${Banner})`, color: "white" }}
      >
        <div className="headerContainer" style={{ color: "white" }}>
          <h1 style={{ color: "white" }}>स्वागतम्</h1>
          <p style={{ color: "white" }}>Best Food In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
