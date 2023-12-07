import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth, deleteYourAccount, getYourAccount, logout } from '../../../store/actions/authActions';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { setCurrentUser } from '../../../store/slices/authSlice';

const Profile = () => {
    const dispatch = useDispatch()
    const {userInfo} = useSelector((state) => state.auth)
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(checkAuth())
        dispatch(getYourAccount())        
    },[])
    const handleDelete = () => {
        dispatch(deleteYourAccount())
        logout()
        dispatch(setCurrentUser())
        navigate("/")
    }
    return (
        <Container>
            {userInfo ? (
                <ul style={{listStyleType: "none"}}>
            <li>Логин: {userInfo.email}</li>
            <li>Имя: {userInfo.first_name}</li>
            <li>Фамилия: {userInfo.last_name}</li>
            <li>Номер: {userInfo.phone_number}</li>
            <Button onClick={handleDelete}>Удалить</Button>
            </ul>
            ) : (null)}
            
            
        </Container>
    );
};

export default Profile;