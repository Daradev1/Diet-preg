import React from 'react';
import { Navbar, Nav, Container, NavDropdown, NavLink } from 'react-bootstrap';
import dietPregLogo from '../../assets/dietPregLogo.png'
import "./nav.css"
import { Link } from 'react-router-dom';
const NavigationBar = () => {
  return (
    <Navbar bg="white" variant="light" expand="lg" className="shadow-sm border-bottom sticky z-50 top-0 text-pink-500" style={{ padding: '0' }}
>
      <Container>
        <Navbar.Brand href="/"><img src={dietPregLogo} alt="" width={40}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-text"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto flex gap-3">
            <NavLink to={'/'}  className="custom-text">Home</NavLink>
            <NavLink to={"/about" }className="custom-text">About</NavLink>
            <NavLink  className="custom-text">Know your Pregnancy Stage</NavLink>
            <NavLink to={"/diet-recomendation"} className="custom-text">Diet Preg Recommendation</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  );
};

export default NavigationBar;
