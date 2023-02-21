import React, { useState, useEffect } from "react";
import { Button, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";

import Home from "./HomeComponent";

import "./css/login.css";
function validateForm(values) {
  const errors = {};
  if (!values.email) {
    errors.email = "Email is required";
  }
  if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
}
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  let GotoHome = useNavigate();
  const [SeverSideError, setSeverSideError] = useState(null);
  const [errors, setErrors] = useState({});

  const onChangeClearError = (name, value) => {
    let data = {
      ...errors,
      [name]: "",
    };
    setErrors(data);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const values = { email, password };
    const errors = validateForm(values);
    setErrors(errors);
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        // throw new Error(data.message);
        //alert(data.CredentialError);
        setSeverSideError(data.CredentialError);
        setIsLoading(false);
      } else {
        
        if (data.status) {
          GotoHome("/home");
          alert("user logged in");
        } 
      }
    } catch (error) {
      alert(error.message);
    }

    // Add code here to handle a successful login
    setIsLoading(false);
  };

  return (
    <>
      <div className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>

            <Col md="8" lg="6" xl="4" className="offset-xl-1">
              <form className="form" onSubmit={handleSubmit} action="/login">
                <h3 className="mb-4">Sign to schotify</h3>
                <div className="mb-4">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="form-control   input2 "
                    onChange={(event) => {
                      setEmail(event.target.value);

                      onChangeClearError("email", event.target.value);
                    }}
                  ></input>
                  {errors.email && (
                    <div style={{ color: "red" }} className="error">
                      {errors.email}
                    </div>
                  )}
                </div>
                <div className="mb-4">
                  <input
                    name="password"
                    type="password"
                    placeholder="password"
                    className="form-control input2"
                    onChange={(event) => {
                      setPassword(event.target.value);

                      onChangeClearError("password", event.target.value);
                    }}
                  ></input>

                  {errors.password && (
                    <div style={{ color: "red" }} className="error">
                      {errors.password}
                    </div>
                  )}
                </div>
                {SeverSideError && (
                  <div className="mb-2" style={{ color: "red" }}>
                    {SeverSideError}
                  </div>
                )}
                <div class="form-check mb-4">
                  <input
                    class="form-check-input remember"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />

                  <label class="form-check-label mb-3 " for="flexCheckDefault">
                    Remember me
                  </label>
                </div>

                <Button
                  className="btn btn-primary mr-2 col-lg-12 col-md -12 col-12 mb-4 btn1"
                  type="submit"
                  disabled={isLoading}
                  // onClick={validateForm}
                  //onChange={changedHappened}
                >
                  {isLoading ? "Loading..." : "Login"}
                </Button>
                {/* <Button className="btn btn-primary ml-2 col-lg-12 col-md -12 col-12 mb-4 btn1">
                  Log in with Google
                </Button> */}

                <p>
                  Don't have an account?{" "}
                  <a href="/signup" className="a">
                    {" "}
                    Sign Up
                  </a>
                </p>
              </form>
            </Col>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
