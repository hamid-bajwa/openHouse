
import React, { useState } from "react";
import { Card, CardBody, Col, Input, Row } from "reactstrap";


// Css properties in homeComponent.css
function Contact() {
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    interested: "",
    phoneNumber: "",
    message: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target]: e.target.value });
  };



  return (
    <div className="container mt-5">
      <Row className="mb-1 p-2">
        <h2>Love to hear from you,</h2>
        <h2>
          Get in touch{" "}
          <img
            className="mb-2"
            src="https://img.icons8.com/emoji/40/null/waving-hand-emoji.png"
          />
        </h2>
      </Row>

      <Card className="mb-4">
        <CardBody className="m-2 mb-3">
          <form className="form needs-validation "  novalidate>
            <Row>
              <Col lg="6">
                  <label className="p-1 mb-1 px-1 ">Your Name</label>
                    <input
                      className="input2 mb-3 form-control"
                      placeholder="Your Name"
                      id="validationCustomName"
                      value={formValue.name}
                      name="name"
                      onChange={onChange}
                    ></input>
              </Col>

              <Col lg="6">
                <div className="form-group">
                  <label className="p-1 mb-1 px-1">Your Email</label>
                  <input
                    className="input2  mb-3 form-control"
                    placeholder="Your Email"
                    id="validationCustomEmail"
                    value={formValue.email}
                    name="email"
                    onChange={onChange}
                  ></input>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg="6">
                <div className="form-group ">
                  <label className="p-1 mb-1 px-1">
                    What your are interested
                  </label>
                  
             
                  <Input
                    className="mb-3 select"
                    type="select"
                    id="validationCustomInterested"
                    name="Interested"
                  >
                    <option>Select Option</option>
                    <option>Suggestion</option>
                    <option>Complaint</option>
                  </Input>

                  {/* <input
                className="input2 mb-3 form-control"
                placeholder="Suggestion or Complaint"
              ></input> */}
                </div>
              </Col>

              <Col lg="6">
                <div className="form-group">
                  <label className="p-1 mb-1 px-1">Phone Number</label>
                  <input
                    className="input2 mb-3 form-control"
                    placeholder="Phone Number"
                    id="validationCustomPhone"
                    value={formValue.phoneNumber}
                    name="phoneNumber"
                    onChange={onChange}
                  ></input>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg="12">
                <div className="form-group">
                  <label className="p-1 mb-1 px-1">Message</label>
                  <textarea
                    type="text"
                    className="message  mb-4 form-control "
                    placeholder="Your message"
                    id="validationCustomMessage"
                    value={formValue.message}
                    name="message"
                    onChange={onChange}
                  ></textarea>
                </div>
              </Col>
            </Row>
            <Row>
              <div className="d-grid gap-2 d-md-flex justify-content-center">
                <button
                  className="btn-warning btn text-right btn-lg"
                  type="submit"
                >
                  Just Send <i class="fa-solid fa-location-arrow"></i>
                </button>
              </div>
            </Row>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default Contact;
