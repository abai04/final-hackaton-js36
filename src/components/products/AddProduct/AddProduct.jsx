import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, getCategories } from '../../../store/actions/productActions';
import { getConfig } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const {categories} = useSelector((state) => state.product)

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState(null)
    const [description, setDescription] = useState("")
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategories())
    }, [])
    const navigate = useNavigate()
    const handleCreate = () => {
    let newProduct = new FormData();
    newProduct.append('title', title);
    newProduct.append('category', category);
    newProduct.append('description', description);
    newProduct.append('price', price);
    if (image) {
      newProduct.append('image', image);
    }
    dispatch(addProduct(newProduct)).then(() => navigate('/products'));
  };
    return (
        <Container>
            <div>
            <h2 style={{marginTop: "100px"}}>Добавьте новое блюдо в меню</h2>
            </div>
            
           <Form style={{backgroundColor: "#a4ebac", boxShadow: "1px 10px 10px 5px #a4ebac", borderRadius: "10px"}} className='w-50'>
           <Form.Group>
            <Form.Label>Название блюда</Form.Label>
            <Form.Control onChange={(e) => setTitle(e.target.value)} value={title} type='text' className='w-50' placeholder='писать здесь'/>
           </Form.Group>
           <Form.Group>
            <Form.Label>Цена</Form.Label>
            <Form.Control onChange={(e) => setPrice(e.target.value)} value={price}  type="text" className='w-50' placeholder='писать здесь'/>
           </Form.Group>

           <Form.Group>
            <Form.Label>Категория</Form.Label>
            <Form.Select
             value={category}
             onChange={(e) => setCategory(e.target.value)}
              >
                <option disabled value="">
                     Выберите Категорию
                </option>
                {categories.map((item) => (
                    <option key={item.slug} value={item.slug}>{item.name}</option>
                ))}
                </Form.Select>
           </Form.Group>

           <Form.Group>
            <Form.Label>Картинка</Form.Label>
            <Form.Control
            onChange={(e) => setImage(e.target.files[0])}
             className='w-50' placeholder='выберите картинку'
            accept='image/*'
            type='file'/>
           </Form.Group>
           <Form.Group>
            <Form.Label>Описание</Form.Label>
            <Form.Control
            onChange={(e) => setDescription(e.target.value)}
            className='w-50' placeholder='писать здесь'
            value={description}
            type='text'/>
           </Form.Group>
            <Button onClick={handleCreate}>Создать</Button>

           </Form>
        </Container>
    );
};

export default AddProduct;