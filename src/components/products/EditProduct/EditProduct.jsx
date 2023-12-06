import React, { useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, editProduct, getCategories, getOneProduct } from '../../../store/actions/productActions';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
    const {categories, oneProduct} = useSelector((state) => state.product)

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState(null)
    const [description, setDescription] = useState("")
    const dispatch = useDispatch()
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getOneProduct(id))
        dispatch(getCategories())
    }, [])
    useEffect(() => {
        if(oneProduct) {
            setTitle(oneProduct.title)
            setDescription(oneProduct.description)
            setPrice(oneProduct.price)
            setCategory(oneProduct.category)
        }
    }, [oneProduct])
    const handleCreate = () => {
    let editedProduct = new FormData();
    editedProduct.append('title', title);
    editedProduct.append('category', category);
    editedProduct.append('description', description);
    editedProduct.append('price', price);
    if (image) {
      editedProduct.append('image', image);
    }
    editedProduct.append("id", id)
    dispatch(editProduct(editedProduct)).then(() => navigate("/products"));
  };
    return (
        <Container>
            <div style={{backgroundColor: "floralwhite"}}>
            <h2 style={{marginTop: "100px"}}>Добавьте новое блюдо в меню</h2>
            </div>
            
           <Form style={{backgroundColor: "#a4ebac", boxShadow: "1px 5px 1px 1px #a4ebac"}} className='w-50'>
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
            <Button onClick={handleCreate}>Сохранить</Button>

           </Form>
        </Container>
    );
};

export default EditProduct;