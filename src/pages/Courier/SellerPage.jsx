import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { registerDeliver } from '../../store/actions/authActions';

const SellerPage = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const dispatch = useDispatch()
  const [showLink, setShowLink] = useState(false)

  const handleRegister = () => {
    const newDeliver = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone_number: number,
      password,
      password_confirm: passwordConfirm
    }
    dispatch(registerDeliver(newDeliver))
    setShowLink(true)
  }
  return (
    <Container>
      <div style={{margin: "auto"}}><h1>Регистрация курьера</h1></div>
      <Form style={{width: "500px"}}>
        <Form.Control onChange={e => setFirstName(e.target.value)} value={firstName} type='text' placeholder='Имя'/>
        <Form.Control onChange={e => setLastName(e.target.value)} value={lastName} type="text" placeholder='Фамилия'/>
        <Form.Control onChange={e => setEmail(e.target.value)} value={email} type='email' placeholder='Логин'/>
        <Form.Control onChange={e => setNumber(e.target.value)} value={number} type='text' placeholder='Номер телефона'/>
        <Form.Control onChange={e => setPassword(e.target.value)} value={password} type='password' placeholder='Пароль'/>
        <Form.Control onChange={e => setPasswordConfirm(e.target.value)} value={passwordConfirm} type='password' placeholder='Подтвердите пароль'/>
        <Button onClick={handleRegister}>Подтвердить</Button>
        {showLink && <p>проверьте эл-почту</p>}
      </Form>
    </Container>
  );
};

export default SellerPage;