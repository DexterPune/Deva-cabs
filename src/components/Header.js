import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // ✅ Import Link from React Router

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      {/* Header Top */}
      <div className="header-top bgg-darkk py-2">
        <div className="container">
          <div className="row justify-content-center justify-content-xl-between align-items-center">
            <div className="col-auto">
              <div className="header-top-contact">
                <ul className='anchor d-md-flex'>
                  <li className='px-md-5 fw-bold'>
                    <a className='text-white' href="tel:+918108807171">
                      <i className="fas fa-phone-volume"></i> +91 8108807171
                    </a>
                  </li>
                  <li className='px-md-5 fw-bold'>
                    <a className='text-white' href="tel:+919764227171">
                      <i className="fas fa-phone-volume"></i> +91 9764227171
                    </a>
                  </li>
                  <li>
                    <a className='text-white' href="mailto:booking@devacab.com">
                      <i className="far fa-envelope"></i>
                      <span className='text-white fw-bold'> booking@devacab.com</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-navigation">
        <Navbar expand="lg">
          <Container>
            <img src="./images/logo.jpg" className='logoo' alt="logo" />
            <Navbar.Toggle aria-controls="main_nav" onClick={toggleNav}>
              <i className="fas fa-bars darkcolorr"></i>
            </Navbar.Toggle>

            <Navbar.Collapse id="main_nav" className={isNavOpen ? "show" : ""}>
              <Nav className="mx-auto">
                <Nav.Link as={Link} to="/" className='fw-bold nav-item'>Home</Nav.Link>

                <NavDropdown title="About Us" id="about-us-dropdown" className='fw-bold'>
                  <NavDropdown.Item as={Link} to="/about-us" className='fw-bold nav-item'>About Us</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/term-condition" className='fw-bold nav-item'>Term & Condition</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/privacy-policy" className='fw-bold nav-item'>Privacy Policy</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link} to="/services" className='fw-bold nav-item'>Services</Nav.Link>
                <Nav.Link as={Link} to="/our-fleet" className='fw-bold nav-item'>Our Fleet</Nav.Link>
                <Nav.Link as={Link} to="/packages" className='fw-bold nav-item'>Packages</Nav.Link>
                <Nav.Link as={Link} to="/booking" className='fw-bold nav-item'>Booking</Nav.Link>
                <Nav.Link as={Link} to="/gallery" className='fw-bold nav-item'>Gallery</Nav.Link>

                <NavDropdown title="Contact Us" id="contact-dropdown" className='fw-bold'>
                  <NavDropdown.Item as={Link} to="/contact-us" className='fw-bold nav-item'>Contact Us</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/enquiry" className='fw-bold nav-item'>Enquiry</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;
