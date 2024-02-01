import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import logo from './images/airbnb.jpg'; // Replace with your logo path
import menu from './images/menu.jpg';
import account from './images/account.jpg';

const Header = () => {
  return (
<Navbar expand="lg" bg="white" variant="white" className="mb-4" style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.1)',padding: '0 80px' }}>
      <Container fluid >
        <Navbar.Brand href="#home">
          <img
            alt="Logo"
            src={logo}
            width="180"
            height="70"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="ml-auto text-center">
            <Nav.Link href="#" className="mb-2 mb-md-0">Airbnb your home</Nav.Link>
            <Nav.Link href="#" className="mb-2 mb-md-0">
              <FontAwesomeIcon icon={faGlobe} />
            </Nav.Link>
            <Nav.Link href="#" className="mb-2 mb-md-0">
              <button className="header-button">
                <img
                  alt="menu"
                  src={menu}
                  width="15"
                  height="15"
                  className="d-inline-block align-top"
                />
                <span className="button-gap"></span>
                <img
                  alt="account"
                  src={account}
                  width="20"
                  height="20"
                  className="d-inline-block align-top"
                />
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
