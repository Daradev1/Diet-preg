import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import dietPregLogo from '../../assets/dietPregLogo.png'
import "./nav.css"
const NavigationBar = () => {
  return (
    <Navbar bg="white" variant="light" expand="lg" className="shadow-sm border-bottom sticky z-50 top-0 text-pink-500" style={{ padding: '0' }}
>
      <Container>
        <Navbar.Brand href="/"><img src={dietPregLogo} alt="" width={40}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-text"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/"  className="custom-text">Home</Nav.Link>
            <Nav.Link href="/about" className="custom-text">About</Nav.Link>
            <Nav.Link href="#" className="custom-text">Know your Pregnancy Stage</Nav.Link>
            <Nav.Link href="/diet-recomendation" className="custom-text">Diet Preg Recommendation</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
