// import logo2 from './assets/logo.svg';
import logo from './assets/logo.jpg';
import React from 'react'
import { Nav, Navbar, NavLink, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
        
        <Navbar.Toggle style={{
            margin: '10px'
        }}/>

         <img src={logo} width="70px" height="70px" /> {' '}
        
                  
        </Navbar.Brand>

        {/* Button was here before. Commented it out. */}

        {/* <Button variant="outline-success" href="/" style={{

            hover: 'background-color: purple',
            margin: '0 auto',

        }}>Connect Wallet</Button> */}

        {/* Navbar toggle was here before. Commented it out. */}
        {/* <Navbar.Toggle /> */}
        <Navbar.Collapse className="justify-content-end">
        <Nav>
            <NavLink><Link to="/">Home</Link></NavLink>
            <NavLink><Link to="/about">About</Link></NavLink>
            <NavLink><Link to="/services">Services</Link></NavLink>
            <NavLink><Link to="/contact">Contact Us</Link></NavLink>
        </Nav>
        
        </Navbar.Collapse>

        {/* <Button className="btn-primary-kingslayer" variant="outline-success" href="/" style={{

            hover: 'background-color: purple',
            margin: '0 auto',

            }}>Connect Wallet</Button> */}

        <Button className="btn-primary-kingslayer" variant="" href="/" style={{

                hover: 'background-color: purple',
                margin: '0 auto',

        }}>Connect Wallet</Button>
            
        {/* <div className="mobile-position">
                  <nav className="navigation">
                      <div className="theme-switch-wrapper">
                          <label className="theme-switch" for="checkbox">
                              <input type="checkbox" id="checkbox" />
                              <div className="mode-container">
                                  <i className="gg-sun"></i>
                                  <i className="gg-moon"></i>
                              </div>
                          </label>
                      </div>
                  </nav>
              </div> */}


    </Navbar>
  )
}

export default Header