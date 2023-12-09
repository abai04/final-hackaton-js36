import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { editYourAccount, getYourAccount } from '../../../store/actions/authActions';

function EditUser(props) {
    const {userInfo} = props
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [firstName, setFirstName] = useState(userInfo.first_name)
  const [lastName, setLastName] = useState(userInfo.last_name)
  const [phoneNumber, setPhoneNumber] = useState(userInfo.phone_number)

  const handleSave = () => {
    const editedAccount = {
        first_name: firstName,
        last_name: lastName,
        phone_number: phoneNumber,
    }
    dispatch(editYourAccount(editedAccount))
    dispatch(getYourAccount())
    handleClose()

  }
  return (
    <>
      <a style={{textDecoration: "none"}} href="#"><FontAwesomeIcon onClick={handleShow} icon={faEdit}/></a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{backgroundColor: "rgb(17, 171, 17)"}} closeButton>
          <Modal.Title>Отредактруйте свой профиль</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder="Имя"/>
                <Form.Control onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder='Фамилия'/>
                <Form.Control onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} placeholder='Номер телефона'/>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditUser;