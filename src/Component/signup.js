import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
function validateForm(values) {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "First Name is required";
  } else if (!/^[A-Za-z]+$/.test(values.firstName)) {
    errors.firstName = "First Name should contain only alphabets";
  }

  if (!values.lastName) {
    errors.lastName = "Last Name is required";
  } else if (!/^[A-Za-z]+$/.test(values.lastName)) {
    errors.lastName = "Last Name should contain only alphabets";
  }
  if (!values.phone) {
    errors.phone = "Phone Number is required";
  } else if (!/^\d+$/.test(values.phone)) {
    errors.phone = "Phone should contain only numbers";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm Password is required";
  }
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  } else if (values.password.length < 6) {
    errors.password = "Password should be at least 6 characters long";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(values.password)
  ) {
    errors.password =
      "Password should contain at least one lowercase letter, one uppercase letter, and one number";
  }
  if (!values.agreeWithTerms) {
    errors.agreeWithTerms = "You must agree to terms";
  }

  return errors;
}
function SignUp() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeWithTerms,setagreeWithTerms]=useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [SeverSideError, setSeverSideError] = useState();
  let GotoHome = useNavigate();


  const onChangeClearError = (name, value) => {
    let data = {
      ...errors,
      [name]: "",
    };
    setErrors(data);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const values = {
      firstName,
      lastName,
      phone,
      email,
      password,
      confirmPassword,
      agreeWithTerms
    };
    const errors = validateForm(values);
    setErrors(errors);
    setIsLoading(true);
   if(Object.keys(errors).length === 0){ try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, phone, email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        setSeverSideError(data.mesg);
        //throw new Error(data.mesg);
      } else {
        
        if (data.status) {
          GotoHome("/home");
          alert("user signed up in");
        } 
      }

      // Add code here to handle a successful login

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }}
    else{
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <Col md="10" lg="8" xl="6" className="offset-xl-1">
              <Card className="mb-4">
                <CardBody className="m-2 mb-3">
                  <form className="form" onSubmit={handleSubmit}>
                    <h3 className="mb-4">Sign Up</h3>
                    {SeverSideError && (
                      <div className="mb-2" style={{ color: "red" }}>
                        {SeverSideError}
                      </div>
                    )}
                    {/* {errors && <div style={{ color: "red" }}>{errors}</div>} */}
                    <Row>
                      <Col lg="6">
                        <div classname="mb-4">
                          <input
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            className="form-control mb-3  input2 "
                            onChange={(event) => {
                              setfirstName(event.target.value);
                              onChangeClearError(
                                "firstName",
                                event.target.value
                              );
                            }}
                          ></input>
                          {errors.firstName && (
                            <div style={{ color: "red" }} className="error">
                              {errors.firstName}
                            </div>
                          )}
                        </div>
                      </Col>
                      <Col lg="6">
                        <div classname="mb-4">
                          <input
                            name="lastName"
                            type="text"
                            placeholder="last Name"
                            className="form-control mb-3  input2 "
                            onChange={(event) => {
                              setlastName(event.target.value);
                              onChangeClearError(
                                "lastName",
                                event.target.value
                              );
                            }}
                          ></input>
                          {errors.lastName && (
                            <div style={{ color: "red" }} className="error">
                              {errors.lastName}
                            </div>
                          )}
                        </div>
                      </Col>
                    </Row>
                    <div classname="mb-4">
                      <input
                        name="phone"
                        type="text"
                        placeholder="Phone"
                        className="form-control mb-3  input2 "
                        onChange={(event) => {
                          setPhone(event.target.value);
                          onChangeClearError("phone", event.target.value);
                        }}
                      ></input>
                      {errors.phone && (
                        <div style={{ color: "red" }} className="error">
                          {errors.phone}
                        </div>
                      )}
                    </div>
                    <div classname="mb-4">
                      <input
                        type="email"
                        placeholder="Email"
                        className="form-control mb-3  input2 "
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
                    <div classname="mb-4">
                      <input
                        name="password"
                        type="password"
                        placeholder="password"
                        className="form-control mb-3 input2"
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
                    <div classname="mb-4">
                      <input
                        name="ConfirmPassword"
                        type="password"
                        placeholder="Confirm password"
                        className="form-control mb-3 input2"
                        onChange={(event) => {
                          setConfirmPassword(event.target.value);
                          onChangeClearError(
                            "ConfirmPassword",
                            event.target.value
                          );
                        }}
                      ></input>
                      {errors.confirmPassword && (
                        <div style={{ color: "red" }} className="error">
                          {errors.confirmPassword}
                        </div>
                      )}
                    </div>
                    {/* <div class="form-check mb-4">
                      <input
                        name="agreeWithTerms"
                        class="form-check-input remember"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                        onChange={(event) => {
                          setagreeWithTerms(event.target.value);
                          onChangeClearError(
                            "agreeWithTerms",
                            event.target.value
                          );
                        }}
                      />
                      <label
                        class="form-check-label mb-3 "
                        for="flexCheckDefault"
                      >
                        I agree with the terms and Privacy
                      </label>
                      {errors.agreeWithTerms && (
                        <div style={{ color: "red" }} className="error">
                          {errors.agreeWithTerms}
                        </div>
                      )}
                    </div> */}

                    <Button
                      className="btn btn-primary mr-2 col-lg-12 col-md -12 col-12 mb-4 btn1"
                      disabled={isLoading}
                    >
                      {isLoading ? "Loading..." : "Sign Up"}
                    </Button>
                    {/* <Button className="btn btn-primary ml-2 col-lg-12 col-md -12 col-12 mb-4 btn1">
                      Sign Up with Google
                    </Button> */}

                    <p>
                      Already have an account?{" "}
                      <a href="/login" className="a">
                        {" "}
                        Login In
                      </a>
                    </p>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
