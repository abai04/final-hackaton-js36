import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteYourAccount, editYourAccount, getYourAccount, logout } from '../../../store/actions/authActions';
import { setCurrentUser } from '../../../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

function DeleteProfile(props) {
    const {userInfo} = props
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [password, setPassword] = useState("")
//    const handleDelete = () => {
//         dispatch(deleteYourAccount())
//         logout()
//         dispatch(setCurrentUser())
//         navigate("/")
//     }

    const navigate = useNavigate()
  const handleDelete = () => {
   dispatch(deleteYourAccount(password))
}
  return (
    <>
      <a style={{textDecoration: "none"}} href="#"><Button onClick={handleShow}>Удалить</Button></a>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{backgroundColor: "rgb(17, 171, 17)"}} closeButton>
          <Modal.Title>Удаление</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control onChange={(e) => setPassword(e.target.value)} type='password' placeholder="Пароль"/>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteProfile;