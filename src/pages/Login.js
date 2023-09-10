import React from "react";
import Layout from "../components/Layout/Layout";
import { useState } from "react";
import Home from "./Home";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/userlogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("successful");
        alert("Login successful");
        window.location = "./Home.js";
      } else {
        console.error("Login failed");
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Layout>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "30%",
          margin: "auto",
          padding: "10px",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <div className="mb-3">
          <h2
            style={{
              fontSize: "2em",
              color: "#000",
              texttransform: "uppercase",
              fontfamily: "'Quicksand', sans-serif",
              textAlign: "center",
            }}
          >
            LOGIN
          </h2>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </Layout>
  );
};

export default Login;
