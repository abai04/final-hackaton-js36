import { useNavigate } from "react-router-dom";

export const getConfig = () => {
  const tokens = JSON.parse(localStorage.getItem('tokens'));
  const Authorization = `Bearer ${tokens.access}`;

  const config = {
    headers: { 
      Authorization,
    },
  };

  return config;
};

export const getCartInStorage = () => {
  const cart = JSON.parse(localStorage.getItem('cart'));

  return cart;
};

export const getProductsCountInCart = () => {
  let cart = getCartInStorage();
  return cart ? cart.products.length : 0;
};

export const calcTotalPrice = (products) => {
  const totalPrice = products.reduce((acc, curr) => (acc += curr.subPrice), 0);

  return totalPrice;
};