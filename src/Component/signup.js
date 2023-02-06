import React from "react";

// Import Swiper styles
import "swiper/css";
import { Button, Card, CardBody, Col, Row } from "reactstrap";

function SignUp() {
  return (
    <>
      <div className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <Col md="10" lg="8" xl="6" className="offset-xl-1">
              <Card className="mb-4">
                <CardBody className="m-2 mb-3">
                  <form className="form">
                    <h3 className="mb-4">Sign Up</h3>
                    <Row>
                      <Col lg="6">
                        <input
                          type="text"
                          placeholder="First Name"
                          className="form-control mb-4  input2 "
                        ></input>
                      </Col>
                      <Col lg="6">
                        <input
                          type="text"
                          placeholder="last Name"
                          className="form-control mb-4  input2 "
                        ></input>
                      </Col>
                    </Row>

                    <input
                      type="text"
                      placeholder="Phone"
                      className="form-control mb-4  input2 "
                    ></input>
                    <input
                      type="text"
                      placeholder="Email"
                      className="form-control mb-4  input2 "
                    ></input>
                    <input
                      type="password"
                      placeholder="password"
                      className="form-control mb-4 input2"
                    ></input>
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className="form-control mb-4 input2"
                    ></input>
                    <div class="form-check mb-4">
                      <input
                        class="form-check-input remember"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label mb-3 "
                        for="flexCheckDefault"
                      >
                        I agree with the terms and Privacy
                      </label>
                    </div>

                    <Button className="btn btn-primary mr-2 col-lg-12 col-md -12 col-12 mb-4 btn1">
                      Sign Up
                    </Button>
                    <Button className="btn btn-primary ml-2 col-lg-12 col-md -12 col-12 mb-4 btn1">
                      Sign Up with Google
                    </Button>

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

            {/* <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
