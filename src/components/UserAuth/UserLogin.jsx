import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function UserLogin(props) {
  const {showLogin, setShowLogin, setShowReg} = props

  const handleClose = () => setShowLogin(false);

  const handleTransition = () => {
    handleClose()
    setShowReg(true)
  }

  return (
    <>
      <Modal show={showLogin} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Войдите на свой аккаунт</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Эл-почта</Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password"  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Отправить
      </Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleTransition} variant='outline-primary'>У меня нет аккаунта</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserLogin;