import React from "react";

function About() {
  return (
    <>
      <div className="">
        <div className="container py-5">
          <div className="row h-100 align-items-center py-5">
            <div className="col-lg-6">
              <h1 className="display-4">About us</h1>
              <p className="lead  mb-0" style={ {color :"#c2cad0"} }>
                Welcome to our platform, a comprehensive resource for students
                looking to find scholarships in Punjab, Pakistan. Our goal is to
                help students achieve their academic dreams by providing them
                with information about scholarships that can help them fund
                their education.
              </p>
            </div>
            <div className="col-lg-6 d-none d-lg-block">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/illus.png"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Our Mission and Goal</h2>
              <p className="font-italic mb-4" style={ {color :"#c2cad0"} }>
                We understand that the cost of education can be a major barrier
                for many students, particularly in a country like Pakistan where
                many families struggle to make ends meet. That's why we have
                created this platform to help students find scholarships that
                can cover the costs of tuition, textbooks, and other educational
                expenses.
              </p>
            </div>
            <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg"
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 mx-auto">
              <img
                src="https://bootstrapious.com/i/snippets/sn-about/img-2.jpg"
                alt=""
                className="img-fluid mb-4 mb-lg-0"
              />
            </div>
            <div className="col-lg-6">
              <i className="fa fa-leaf fa-2x mb-3 text-primary"></i>
              <h2 className="font-weight-light">Comprehensive Scholarship Database and Support</h2>
              <p className="font-italic  mb-4" style={ {color :"#c2cad0"} }> 
                We believe that every student should have access to the
                resources they need to achieve their academic goals, regardless
                of their financial background. We are committed to helping
                students in Punjab, Pakistan, find the scholarships they need to
                pursue their dreams and build a better future for themselves and
                their communities. Thank you for choosing our platform as your
                resource for finding scholarships. We are honored to play a role
                in helping you achieve your academic aspirations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="container py-5">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-4 font-weight-light">Our team</h2>
            </div>
          </div>

          <div className="row text-center justify-content-center">

            {/* <!-- Team item 1--> */}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0" style={ {color :"#000"} }>Hamid Bajwa</h5>
                <span className="small text-uppercase text-muted">
                  Web Developer
                </span>
                <ul className="social mb-0 list-inline mt-3">
                 
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/muhammad_hamid__/"  target="_blank"  className="social-link">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://linkedin.com/in/hamidbajwa/"  target="_blank" className="social-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- End--> */}

            {/* <!-- Team item--> */}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
               <h5 className="mb-0" style={ {color :"#000"} }>M.Faizan </h5>
                <span className="small text-uppercase text-muted">
                  Web Developer
                </span>
                <ul className="social mb-0 list-inline mt-3">
                 
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/_raobilal/"  target="_blank"  className="social-link">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://linkedin.com/in/hamidbajwa/"  target="_blank" className="social-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- End--> */}

            {/* <!-- Team item--> */}
            <div className="col-xl-3 col-sm-6 mb-5">
              <div className="bg-white rounded shadow-sm py-5 px-4">
                <img
                  src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png"
                  alt=""
                  width="100"
                  className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                />
                <h5 className="mb-0" style={ {color :"#000"} }>Bilal Sami</h5>
                <span className="small text-uppercase text-muted">
                  Web Developer
                </span>
                <ul className="social mb-0 list-inline mt-3">
                  
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/eff.dot/"  target="_blank"  className="social-link">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/muhammad-faizan-530688210/"  target="_blank" className="social-link">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- End--> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
