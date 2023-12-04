import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UserLogin from '../UserAuth/UserLogin';
import UserRegister from '../UserAuth/UserRegister';
import { Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link href="#home">Еда</Nav.Link>
            <Nav.Link style={{marginLeft: "20px"}} href="#link">Курьерская служба</Nav.Link>
            <NavDropdown className='ms-auto' title="Авторизация">
              <UserLogin/>
              <UserRegister/>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;