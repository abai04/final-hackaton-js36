import React, { useEffect, useState } from 'react';
import { Button, FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Form, useNavigate } from 'react-router-dom';
import { editCategory, getCategories } from '../../../store/actions/productActions';

const EditCategory = ({item}) => {
    const [category, setCategory] = useState("")
    const dispatch = useDispatch()
    const handleSave = () => {
        if(!category){
            alert("Заполните поле!")
            return
        }
        const editedCategory = {
            name: category,
            slug: item.slug
        }
        dispatch(editCategory(editedCategory))
        dispatch(getCategories())
        setCategory("")
        window.location.reload()
        }
    return (
        <div style={{display: 'flex'}}>
            <FormControl type='text' value={category} onChange={(e) => setCategory(e.target.value)} />
            <Button variant='outline-primary' onClick={handleSave}>Сохранить</Button>
        </div>
    );
};

export default EditCategory;