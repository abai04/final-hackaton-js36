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
import { checkAuth, logout } from '../../store/actions/authActions';
import { setCurrentUser } from '../../store/slices/authSlice';

function NavigationBar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {currentUser} = useSelector((state) => state.auth)
  useEffect(() => {
    if(localStorage.getItem('tokens')){
      dispatch(checkAuth())
    }
  }, [])
  const handleLogout = () => {
    logout()
    dispatch(setCurrentUser())
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link className='me-3' onClick={() => navigate("/products")}>Еда</Nav.Link>
            <Nav.Link onClick={() => navigate("/job")}>Курьерская служба</Nav.Link>
            {currentUser ? (
              <Button className='ms-auto' variant='success' onClick={handleLogout}>{currentUser} Logout</Button> 
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
