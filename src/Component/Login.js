import React,{useState,useEffect} from "react";
import {
  Button,
  Col,
} from "reactstrap";
import "./css/login.css"
function Login() {

  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [error,setError]=useState(null);
  const [isLoggedIn, setIsLoggedIn]=useState(null);



  const handeSubmit = async event=>{
    event.preventDefault();

    try{

    }
    catch(error){

    }
  }

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
            
          <form className="form">
              <h3 className="mb-4">Sign to schotify</h3>
              <input
                type="text"
                placeholder="Email/phone"
                className="form-control mb-4  input2 "
              ></input>
              <input
                type="password" 
                placeholder="password"
                className="form-control mb-4 input2"
              ></input>
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
                
              
              <Button className="btn btn-primary mr-2 col-lg-12 col-md -12 col-12 mb-4 btn1">Log In</Button>
              <Button  className="btn btn-primary ml-2 col-lg-12 col-md -12 col-12 mb-4 btn1">Log in with Google</Button>

              <p>Don't have an account? <a href="/signup" className="a"> Sign Up</a></p>
            </form>

            
          </Col>
         
        </div>
      </div>
      </div>
    </>
  );
}

export default Login;
