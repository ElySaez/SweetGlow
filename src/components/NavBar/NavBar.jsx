import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import Cart from '../CartWidget/CartWidget';
import logo from '/logo.png';
import './NavBar.css'

const NavBar = () => {
  const cartItemsCount = 5;

  return (
    <Navbar expand="lg" bg="light" variant="light" className="navbar">
      <Container>
        
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo empresa" className="logo-img" />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbar-nav" />
        
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="nav-link">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos" className="nav-link">Productos</Nav.Link>
            {/* <Nav.Link as={Link} to="#" className="nav-link">Ofertas</Nav.Link> */}
            <Nav.Link as={Link} to="#" className="nav-link">Contacto</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
      <Cart itemCount={cartItemsCount} />
    </Navbar>

  );
};

export default NavBar;