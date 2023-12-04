import { useState } from 'react';
import { Form, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function UserRegister(props) {
  const {setShowLogin, showLogin} = props
  const [show, setShow] = useState(false);

  const handleClose = () => {
    if(showLogin){
      setShowLogin(false)
    }
    setShow(false)};
  const handleShow = () => {
    setShow(true)
  };

  return (
    <>
    <Button variant='outline-success' onClick={handleShow}>Зарегистрироваться</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{backgroundColor: "rgb(17, 174, 17)", color: "white"}} closeButton>
          <Modal.Title>Регистрация</Modal.Title>
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
        <Form.Label>Подтвердите пароль</Form.Label>
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
      </Modal>
    </>
  );
}

export default UserRegister;