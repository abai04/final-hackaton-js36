import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth, deleteYourAccount, getYourAccount, logout } from '../../../store/actions/authActions';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { setCurrentUser } from '../../../store/slices/authSlice';

import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faUser } from '@fortawesome/free-regular-svg-icons';
import EditUser from './EditProfile';
import DeleteProfile from './DeleteProfile';

function Profile(props) {
  const {handleLogout} = props
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   const dispatch = useDispatch()
    const {userInfo} = useSelector((state) => state.auth)
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(checkAuth())
        dispatch(getYourAccount())        
    },[])
   
  return (
    <>
      <Button style={{borderRadius: "20px"}} variant="outline-success" onClick={handleShow}>
        <FontAwesomeIcon icon={faUser}/>
      </Button>

      <Offcanvas placement='end' show={show} onHide={handleClose}>
        <Offcanvas.Header style={{backgroundColor: "rgb(17, 174, 17)", color: "white"}} closeButton>
          <Offcanvas.Title>Личный кабинет</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <EditUser userInfo = {userInfo}/>
           {userInfo ? (
                <ul style={{listStyleType: "none"}}>
            <li>Логин: {userInfo.email}</li>
            <li>Имя: {userInfo.first_name}</li>
            <li>Фамилия: {userInfo.last_name}</li>
            <li>Номер: {userInfo.phone_number}</li>
            <DeleteProfile/>
            </ul>
            ) : (null)}
            <Button className='ms-auto' variant='success' onClick={handleLogout}>Выйти</Button> 
        </Offcanvas.Body>
        
      </Offcanvas>
    </>
  );
}

export default Profile;

// const Profile = () => {
//     const dispatch = useDispatch()
//     const {userInfo} = useSelector((state) => state.auth)
//     const navigate = useNavigate()
//     useEffect(() => {
//         dispatch(checkAuth())
//         dispatch(getYourAccount())        
//     },[])
//     const handleDelete = () => {
//         dispatch(deleteYourAccount())
//         logout()
//         dispatch(setCurrentUser())
//         navigate("/")
//     }
//     return (
//         <Container>
//             {userInfo ? (
//                 <ul style={{listStyleType: "none"}}>
//             <li>Логин: {userInfo.email}</li>
//             <li>Имя: {userInfo.first_name}</li>
//             <li>Фамилия: {userInfo.last_name}</li>
//             <li>Номер: {userInfo.phone_number}</li>
//             <Button onClick={handleDelete}>Удалить</Button>
//             </ul>
//             ) : (null)}
            
            
//         </Container>
//     );
// };

// export default Profile;

