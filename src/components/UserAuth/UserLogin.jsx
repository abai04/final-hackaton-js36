import { useState } from 'react';
import { Form, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserRegister from './UserRegister';

function UserLogin(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button style={{width: "100%"}} variant='outline-success' onClick={handleShow}>Войти</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{backgroundColor: "rgb(17, 174, 17)", color: "white"}} closeButton>
          <Modal.Title>Войдите на свой аккаунт</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Эл-почта</Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password"  />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <button style={{backgroundColor: "rgb(17, 174, 17)", color: "white"}} className='btn' variant='success' type="submit">
        Отправить
      </button>
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