import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProductFromCart, getCart, changeProductCount } from '../../store/slices/cartSlice';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart || { products: [], totalPrice: 0 });

  useEffect(() => {
    console.log('Cart effect: cart=', cart);
  }, [cart]);

  const cartCleaner = () => {
    localStorage.removeItem('cart');
    dispatch(getCart({ products: [], totalPrice: 0 }));
  };

  const handleProductCountChange = (id, count) => {
    const newCount = isNaN(count) ? 1 : Math.max(1, parseInt(count, 10));
    dispatch(changeProductCount({ id, count: newCount }));
  };


  const handleDeleteProduct = (id) => {
    dispatch(deleteProductFromCart(id));
  };


  const handleBuyClick = () => {
    console.log('Купить');
  };

  return (
    <div className="container mt-4">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col" className="text-right">
              Title
            </th>
            <th scope="col" className="text-right">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {cart && cart.products && cart.products.length > 0 ? (
            cart.products.map((row) => (
              <tr key={row.item.id}>
                <td>
                  <img src={row.item.image} alt="" width={'70'} />
                </td>
                <td className="text-right">{row.item.title}</td>
                <td className="text-right">
                  <input
                    type="number"
                    value={row.count}
                    onChange={(e) => handleProductCountChange(row.item.id, e.target.value)}
                    min={1}
                  />
                  <Button onClick={() => handleDeleteProduct(row.item.id)}>
                    Удалить
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} className="text-center">
                Корзина пуста
              </td>
            </tr>
          )}
          <tr>
            <td colSpan={2} className="text-right">
              <strong>Итого:</strong>
            </td>
            <td className="text-right">
              <strong>{cart && cart.totalPrice} сом</strong>
            </td>
            <td className="text-right">
              <Button variant="primary" onClick={handleBuyClick}>
                Купить
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
