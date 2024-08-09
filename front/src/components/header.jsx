import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import React from "react";
import { HiMiniShoppingCart} from "react-icons/hi2";
import { FaUserTie } from "react-icons/fa";
import '../style/index.css';
import logo from '../styling/logo2.png';
import {LinkContainer} from 'react-router-bootstrap';
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa"


const Header = () => {
  const radiusNav = {
    borderRadius: "20px",
  };
  const {cartItems }=useSelector((state)=>state.cart);
  console.log(cartItems);
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
          <LinkContainer to="/">
          <Navbar.Brand >
            <img src={logo} alt="NoImage" height="50px" width="50px"></img>
            
            My Home</Navbar.Brand>
            </LinkContainer>
            {/* Linkontainer are used in place of a href to link the {link} with the page to render */}
          <Navbar.Toggle aria-controls="collapse-navbar" />
          <Navbar.Collapse id="collapse-navbar">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
              <Nav.Link>
                <FaShoppingCart/>
                 Cart
                {
                  cartItems.length > 0 && (
                    <Badge pill bg='success' style={{marginLeft:"5px"}}>
                      {cartItems.reduce((a,c)=>a+Number(c.qty),0)}
                       
                    </Badge>
                  )
                }
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
              <Nav.Link className="custom-link">
                <FaUserTie />
                Sign In
              </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
