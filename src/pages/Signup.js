import React from "react";
import Layout from "./../components/Layout/Layout";
import { useState } from "react";

const Signup = () => {
  const initialFormData = {
    name: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);

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
      const response = await fetch("http://localhost:8080/usersignup", {
        // Adjust URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const responseText = await response.text();
      if (response.ok) {
        if (responseText === "done") {
          alert("You are already registered");
        } else if (responseText === "success") {
          alert("Registration Successfully Done");
        }
        setFormData(initialFormData);
      } else {
        alert("Registration Failed");
        console.error("Failed to submit form data");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
    // console.log('Form submitted with data:', formData);
  };

  const handleClick = () => {
    window.location = "Login";
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
            SIGN UP
          </h2>
        </div>
        <div className="mb-3">
          <label for="exampleInputName1" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-control"
            id="exampleInputName1"
            aria-describedby="namelHelp"
          />
          <div id="nameHelp" className="form-text">
            We'll never share your details with anyone else.
          </div>
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
        <div
          className="mb-3 form-check"
          style={{
            display: "flex",
            textDecoration: "none",
          }}
        >
          <label className="form-check-label" for="exampleCheck1">
            Already have an account ?
          </label>
          <p>
            <a
              class="link-opacity-100-hover"
              href="#"
              onClick={handleClick}
              style={{
                textDecoration: "none",
                marginLeft: "30px",
                color: "#000",
              }}
            >
              Login
            </a>
          </p>
        </div>
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </Layout>
  );
};

export default Signup;
