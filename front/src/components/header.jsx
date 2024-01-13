import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { FaUserTie } from "react-icons/fa";
import '../styling/header.css'
import logo from '../styling/logo2.png'

const Header = () => {
  const radiusNav = {
    borderRadius: "20px",
  };

  return (
    <header>
      {/* bg=background color, expand=lg means it will expand for large screen and collapseOnSelect is a  
        attribute  which executes the collapse of navbar after an element has been selected.*/}

      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        collapseOnSelect
        style={radiusNav}
      >
        <Container className="container">
          <Navbar.Brand href="/">
            <img src={logo} alt="No image" height="50px" width="50px"></img>
            
            My Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="collapse-navbar" />
          <Navbar.Collapse id="collapse-navbar">
            <Nav className="ms-auto">
              <Nav.Link href="/cart">
                <HiMiniShoppingCart /> ShopCart
              </Nav.Link>
              <Nav.Link href="/login">
                <FaUserTie />
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
