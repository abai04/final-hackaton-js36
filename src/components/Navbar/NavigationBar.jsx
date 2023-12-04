import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import UserLogin from "../UserAuth/UserLogin";
import UserRegister from "../UserAuth/UserRegister";

function NavigationBar() {
  const [show, setShow] = useState("false");
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link style={{ marginLeft: "20px" }} href="#link">
            Link
          </Nav.Link>
          <NavDropdown
            style={{ marginLeft: "auto" }}
            title="Авторизация"
            id="basic-nav-dropdown"
          >
            <UserLogin />
            <UserRegister />
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
