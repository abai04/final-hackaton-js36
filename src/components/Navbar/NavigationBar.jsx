import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth, logout } from '../../store/actions/authActions';
import { setCurrentUser } from '../../store/slices/authSlice';
import { getCart } from '../../store/slices/cartSlice';
import { ADMIN } from '../../helpers/consts';
import { BsCart } from 'react-icons/bs';
import UserLogin from '../UserAuth/UserLogin';
import UserRegister from '../UserAuth/UserRegister';
import { useCart } from '../../contexts/CartContextProvider';
import Profile from '../UserAuth/Profile/Profile';

function NavigationBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);


  useEffect(() => {
    dispatch(checkAuth());
    dispatch(getCart());
  }, [dispatch]);

  const handleLogout = () => {
    logout();
    dispatch(setCurrentUser());
    navigate('/');
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand
          style={{ fontFamily: 'Manrope, serif', color: 'green', fontSize: '800', cursor: 'pointer' }}
          onClick={() => navigate('/')}
        >
          Kurultai
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link className='me-5' onClick={() => navigate("/products")}>Еда</Nav.Link>
            <Nav.Link className='me-5' onClick={() => navigate("/job")}>Курьерская служба</Nav.Link>
            {currentUser === ADMIN && (
              <Nav.Link onClick={() => navigate("/admin")}>Страница Админа</Nav.Link>
            )}
            <Nav.Link onClick={() => navigate('/cart')}>
            <BsCart size={20} />
            {cart.products?.length > 0 && (
              <Badge bg="danger" className="ms-1">
                {cart.products.length}
              </Badge>
            )}
          </Nav.Link>
            <div className='ms-auto'>
                {currentUser ? (
              <>
              {currentUser === ADMIN ? (<Button onClick={handleLogout}>Выйти</Button>):(<Profile handleLogout = {handleLogout}/>)}
              </>
            ) : (
              <NavDropdown menuVariant='dark' className='ms-auto' title="Авторизация">
              <UserLogin/>
              <UserRegister/>
            </NavDropdown>
          )}
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
