import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { FaRegIdCard } from 'react-icons/fa';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <FaRegIdCard /> Media library
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Profile
          </Nav.Link>
          <Nav.Link as={Link} to="/addition">
            Addition
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
