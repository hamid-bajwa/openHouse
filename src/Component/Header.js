import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import "./css/Header.css"
class Header extends Component {
    constructor(props){
        super(props);
        this.state ={
          isNavOpen:   false
        };
        this.toggleNav= this.toggleNav.bind(this);
      }
    
      toggleNav()
      {
        this.setState({isNavOpen : !this.state.isNavOpen});
    
      }

    render() { 
        return (
            <>
               
                <Navbar expand="md" className='navbar' dark> 
                    <NavbarBrand className="mr-auto text" href='/home'>Schotify</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav}  />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav className='m-auto ' navbar>
                        <NavItem>
                            <NavLink href='/home' className='nav-link text '>    <i className="fa-solid fa-house m-1"></i><t/> 
                             Home</NavLink>
                           
                        </NavItem>
                        <NavItem>
                            <NavLink href='/aboutus' className='nav-link text '>  <i class="fa-solid fa-info m-1"></i> <t/>
                                About Us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/profile' className='nav-link text '>  <i class="fa-solid fa-user"></i> <t/>
                                Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/contactus' className='nav-link text'> <i class="fa-solid fa-phone m-1"></i> <t/>
                            Contact us</NavLink>
                        </NavItem>
                        
                    </Nav>
                    <Nav navbar>
                        <NavItem>
                            <NavLink href='/login' className='nav-link text '>Log in</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href='/signup' className='nav-link text '>Sign Up</NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
                
            </>
        );
    }
}
 
export default Header;