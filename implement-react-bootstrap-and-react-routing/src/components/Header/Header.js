import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const navStyle = {
        fontWeight: "bold",
    };
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <NavLink to="/home" className="nav-link">
              <h2 style={{color: 'white'}}>My Personal site</h2>
            </NavLink>
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/home" activeStyle={navStyle}>
                Home
              </NavLink>
              <NavLink
                className="nav-link"
                to="/friends"
                activeStyle={navStyle}
              >
                Friends
              </NavLink>
              <NavLink className="nav-link" to="/about" activeStyle={navStyle}>
                About
              </NavLink>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;