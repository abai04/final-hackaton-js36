import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductFromCart } from '../../store/slices/cartSlice';

const Cart = () => {
    const {cart, cartLength} = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    console.log(cart);
    return (
        <div>
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
                <td>{product.count}</td>
                <td>{product.subPrice}</td>
                <td><Button onClick={() => dispatch(deleteProductFromCart(product.item.id))} variant='outline-danger'>Удалить</Button></td>
            </tr>
           ))
        }
      </tbody>
      
    </Table>
        </div>
    );
};

export default Cart;