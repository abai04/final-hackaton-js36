import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UserLogin from '../UserAuth/UserLogin';
import UserRegister from '../UserAuth/UserRegister';
import { Button, Dropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth, getYourAccount, logout } from '../../store/actions/authActions';
import { setCurrentUser } from '../../store/slices/authSlice';
import { ADMIN } from '../../helpers/consts';

function NavigationBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(checkAuth())
  }, []);
  const handleLogout = () => {
    logout()
    dispatch(setCurrentUser())
    navigate("/")
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand
          style={{ color: "green", fontSize: "800", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          Kurultai
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link className='me-5' onClick={() => navigate("/products")}>Еда</Nav.Link>
            <Nav.Link className='me-5' onClick={() => navigate("/job")}>Курьерская служба</Nav.Link>
            {currentUser === ADMIN ? (
              <Nav.Link onClick={() => navigate("/admin")}>Страница Админа</Nav.Link>
            ) : (null) }
            
            {currentUser ? (
              <>
              <Button className='ms-auto' variant='success' onClick={handleLogout}>{currentUser} Logout</Button> 
              <Nav.Link onClick={() => navigate("/profile")}>Профиль</Nav.Link>
              </>
            ) : (
              <NavDropdown className='ms-auto' title="Авторизация">
              <UserLogin/>
              <UserRegister/>
            </NavDropdown>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
