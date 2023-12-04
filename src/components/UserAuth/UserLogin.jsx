import { useState } from 'react';
import { Form, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserRegister from './UserRegister';
import { useDispatch } from 'react-redux';
import { login } from '../../store/actions/authActions';

function UserLogin(props) {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("") 
  const [password, setPassword] = useState("") 

  const dispatch = useDispatch()
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogin = () => {
    if(!email.trim() || !password.trim()){
      alert("Заполните поля")
      console.log(email, password);
    }else{
      const userData = {
        email,
        password
      }
      dispatch(login(userData))
    }

  }
  return (
    <>
    <Button style={{width: "100%"}} variant='outline-success' onClick={handleShow}>Войти</Button>

      <Modal backdrop='static' show={show} onHide={handleClose}>
        <Modal.Header style={{backgroundColor: "rgb(17, 174, 17)", color: "white"}} closeButton>
          <Modal.Title>Войдите на свой аккаунт</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
      <Form.Group className="mb-3" >
        <Form.Label >Эл-почта</Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label >Пароль</Form.Label>
        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password"  />
      </Form.Group>
      <Button style={{backgroundColor: "rgb(17, 174, 17)", color: "white"}} className='btn' variant='success'
      onClick={handleLogin}
      >
        Отправить
      </Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <UserRegister showLogin={show} setShowLogin={setShow}/>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserLogin;