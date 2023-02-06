import React from 'react'
import {  Row } from 'reactstrap';
import "./css/footer.css"
import { Link } from 'react-router-dom';


function Footer() {
    return (
    <div className="footer">
        <div className="container">
            <Row className='justify-content-center'>
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li className='mb-1'><Link className='link' to='/home'><i className="fa-solid fa-house m-1"></i>Home</Link></li>
                        <li className='mb-1'><Link className='link' to='/aboutus'> <i class="fa-solid fa-info m-1"></i> About Us</Link></li>
                        <li className='mb-1'><Link className='link' to='/contactus'><i class="fa-solid fa-phone m-1"></i>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address >
                    University of Central Punjab<br />
                    Avenue 1,Khayaban-e-Jinnah Road<br />
                    Lahore, Punjab<br  />
                    <i className="fa-solid fa-phone   p-1 mb-1 "></i>   : +92 30000000<br />
                    <i className="fa-solid fa-fax  p-1 mb-1"></i> : +92 8765 4321<br />
                    <i className="fa-solid fa-envelope p-1 mb-1"></i> : <a className='link ' href="https://ucp.edu.pk/">
                    www.ucp.edu.pk</a>
                    </address>
                </div>
            </Row>
            <Row className="justify-content-center">
                <div className="col-auto">
                    <p>© Copyright Schotify</p>
                </div>
            </Row>
        
        </div>
    </div>
      );
}

export default Footer;