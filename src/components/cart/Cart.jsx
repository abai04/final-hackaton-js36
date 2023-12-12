import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeProductCount, deleteProductFromCart } from '../../store/slices/cartSlice';
import { order } from '../../store/actions/cartActions';

const Cart = () => {
    const {cart, cartLength} = useSelector((state) => state.cart)
    const {currentUser} = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const handleOrder = () => {
      const newOrder = {
        products: cart.products,
        address: "если работает, напиши"
      }
      dispatch(order(newOrder))
    }
    console.log(cart);
    return (
        <Container className='d-block'>
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
    {currentUser ? (<Button
    onClick={handleOrder}
     variant='success'>Купить за {cart.totalPrice} сом</Button>) : ("Зайдите на свой профиль, чтобы оформить заказ")}
    
        </Container>
    );
};

export default Cart;