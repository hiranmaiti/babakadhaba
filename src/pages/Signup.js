import React from "react";
import Layout from "./../components/Layout/Layout";

const Signup = () => {
  return (
    <Layout>
      <form
        style={{
          width: "30%",
          margin: "auto",
          padding: "10px",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <div class="mb-3">
          <label for="exampleInputName1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName1"
            aria-describedby="namelHelp"
          />
          <div id="nameHelp" class="form-text">
            We'll never share your details with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        {/* <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default Signup;
