import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeProductCount, deleteProductFromCart, getCart } from '../../store/slices/cartSlice';
import { order } from '../../store/actions/cartActions';
import { getCartInStorage } from '../../helpers/functions';

const Cart = () => {
    const [address, setAddress] = useState("")
    const [comment, setComment] = useState("")
    const {cart, cartLength} = useSelector((state) => state.cart)
    const {currentUser} = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getCart())
    }, [])
    const handleOrder = () => {
      const productsToOrder = cart.products.map((product) => {
        return {product: product.item.id, quantity: product.count}
      })
      const newOrder = {
        products: productsToOrder,
        address,
        comment
      }
      dispatch(order(newOrder))
      localStorage.removeItem('cart')
      dispatch(getCart())
    }
    return (
        <Container className='d-block'>
          {cart.products.length !== 0 ? (<>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th style={{width: "20px"}}>Картинка</th>
          <th>Название</th>
          <th>Категории</th>
          <th>Цена</th>
          <th>Колличество</th>
          <th>Общая цена продукта</th>
          <th>-</th>
        </tr>
      </thead>
      <tbody>
        {
           cart.products.map((product) => (
            <tr>
                <td><img width={"100px"} src={product.item.image} alt="" /></td>
                <td>{product.item.title}</td>
                <td>{product.item.category}</td>
                <td>{product.item.price}</td>
                <td><input
                value={product.count}
                min={1}
                max={20}
                onChange={(e) => dispatch(changeProductCount({id: product.item.id, count: e.target.value}))}
                 type="number" /></td>
                <td>{product.subPrice}</td>
                <td><Button onClick={() => dispatch(deleteProductFromCart(product.item.id))} variant='outline-danger'>Удалить</Button></td>
            </tr>
           ))
        }
      </tbody>
      
    </Table>
    {currentUser ? (<>
    <Button
    onClick={handleOrder}
     variant='success'>Купить за {cart.totalPrice} сом</Button>
     <Form.Control onChange={(e) => setAddress(e.target.value)} className='w-25' placeholder='Ваш адрес'/>
     <Form.Control onChange={(e) => setComment(e.target.value)} className='w-25' placeholder='Комментарий к заказу'/>
     </>) : ("Зайдите на свой профиль, чтобы оформить заказ")}
    
          </>) : (<h1>Ваша корзина пуста</h1>)}
          
            
        </Container>
    );
};

export default Cart;