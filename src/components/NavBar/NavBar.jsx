import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Cart from '../CartWidget/CartWidget';
import logo from '/logo.png';
import './NavBar.css'

const NavBar = () => {
  const cartItemsCount = 5;

  return (
    <Navbar expand="lg" bg="light" variant="light" className="navbar">
      <Container>
        <Navbar.Brand href="index.html">
          <img src={logo} alt="Logo empresa" className="logo-img" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-center">
          <Nav className="ml-auto">
            <Nav.Link href="#" className="nav-link">Inicio</Nav.Link>
            <Nav.Link href="#" className="nav-link">Productos</Nav.Link>
            <Nav.Link href="#" className="nav-link">Ofertas</Nav.Link>
            <Nav.Link href="#" className="nav-link">Contacto</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
      <Cart itemCount={cartItemsCount} />
    </Navbar>
  );
};

export default NavBar;
