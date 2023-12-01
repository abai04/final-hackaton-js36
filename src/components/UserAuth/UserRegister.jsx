import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function UserRegister(props) {
  const {showReg, setShowReg, setShowLogin} = props

  const handleClose = () => setShowReg(false);

  const handleTransition = () => {
    handleClose()
    setShowLogin(true)
  }


  return (
    <>
      <Modal show={showReg} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Регистрация</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Эл-почта</Form.Label>
        <Form.Control type="email"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password"  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Подтвердите пароль</Form.Label>
        <Form.Control type="password"  />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Отправить
      </Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleTransition} variant='outline-primary'>У меня есть аккаунт</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserRegister;