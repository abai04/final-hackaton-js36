import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UserLogin from '../UserAuth/UserLogin';
import UserRegister from '../UserAuth/UserRegister';
import { Button } from 'react-bootstrap';

function NavigationBar() {
  const [showLogin, setShowLogin] = useState("false")
  const [showReg, setShowReg] = useState("false")
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link href="#home">Еда</Nav.Link>
            <Nav.Link style={{marginLeft: "20px"}} href="#link">Курьерская служба</Nav.Link>
            <NavDropdown style={{marginLeft: "auto"}} title="Авторизация" id="basic-nav-dropdown">

              <Button onClick={() => setShowLogin("true")} variant='light'>Войти</Button>
              <UserLogin showReg={showReg} setShowReg={setShowReg} showLogin={showLogin} setShowLogin={setShowLogin}/>

              <Button onClick={()=> setShowReg("true")} variant='light'>Регистрация</Button>
              <UserRegister  showReg={showReg} setShowReg={setShowReg} showLogin={showLogin} setShowLogin={setShowLogin}/>

            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;