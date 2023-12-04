import { useState } from 'react';
import { Form, NavDropdown } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { register } from '../../store/actions/authActions';

function UserRegister(props) {
  const {setShowLogin, showLogin} = props
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")

  const handleClose = () => {
    if(showLogin){
      setShowLogin(false)
    }
    setShow(false)};
  const handleShow = () => {
    setShow(true)
  };

  const handleRegister = () => {
    if(!email.trim() || !firstName.trim() || !lastName.trim() || !phoneNumber.trim() || !password.trim() || !passwordConfirm.trim()){
      alert('Заполните все поля')
    } else {
      const newUser = {
        first_name: firstName,
        last_name: lastName,
        email,
        phone_number: phoneNumber,
        password,
        password_confirm: passwordConfirm
      }
      dispatch(register(newUser))
    }
  }

  return (
    <>
    <Button variant='outline-success' onClick={handleShow}>Зарегистрироваться</Button>

      <Modal backdrop='static' show={show} onHide={handleClose}>
        <Modal.Header style={{backgroundColor: "rgb(17, 174, 17)", color: "white"}} closeButton>
          <Modal.Title>Регистрация</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Эл-почта</Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Имя</Form.Label>
        <Form.Control onChange={(e) => setFirstName(e.target.value)} type="text" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Фамилия</Form.Label>
        <Form.Control onChange={(e) => setLastName(e.target.value)} type="text" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Номер</Form.Label>
        <Form.Control onChange={(e) => setPhoneNumber(e.target.value)} type="text" />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Пароль</Form.Label>
        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password"  />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Подтвердите пароль</Form.Label>
        <Form.Control onChange={(e) => setPasswordConfirm(e.target.value)} type="password"  />
      </Form.Group>
      <Button
       style={{backgroundColor: "rgb(17, 174, 17)", color: "white"}} 
       className='btn' 
       variant='success'
       onClick={handleRegister}
       >
        Отправить
      </Button>
    </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UserRegister;