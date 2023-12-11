import { createSlice } from "@reduxjs/toolkit";
import { calcSubPrice, calcTotalPrice, getCartInStorage, getProductsCountInCart } from "../../helpers/functions";

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')),
    cartLength: getProductsCountInCart()
}

export const checkProductInCart = (id) => {
        let cart = getCartInStorage()
        if (cart) {
            let newCart = cart.products.filter((elem) => elem.item.id === id)
            return newCart.length > 0 ? true : false
        }
}



const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
            getCart: (state) => {
            let cart = getCartInStorage()
                if (!cart) {
      localStorage.setItem(
        'cart',
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    state.cart = cart
            },
    addToCart: (state, action) => {
        let cart = getCartInStorage()
        if(!cart){
            cart = {products: [], totalPrice: 0}
        }

        let newProduct = {
            item: action.payload,
            count: 1,
            subPrice: +action.payload.price
        }

        let productToFind = cart.products.filter((elem) => elem.item.id === action.payload.id)

        if(productToFind.length === 0) {
            cart.products.push(newProduct)
        }else{
            cart.products = cart.products.filter((elem) => elem.item.id !== action.payload.id)
        }

        cart.totalPrice = calcTotalPrice(cart.products)

        localStorage.setItem('cart', JSON.stringify(cart))
        state.cart = cart
    },
    deleteProductFromCart: (state, action) => {
        let cart = getCartInStorage()
        cart.products = cart.products.filter((elem) => elem.item.id !== action.payload)
        cart.totalPrice = calcTotalPrice(cart.products);
        localStorage.setItem('cart', JSON.stringify(cart));
        state.cart = cart
    },
    changeProductCount : (state, action) => {
        let cart = getCartInStorage()

        cart.products = cart.products.map((product) => {
            if(product.item.id === action.payload.id) {
                product.count = action.payload.count;
                product.subPrice = calcSubPrice(product)
            }
            return product
        })

        cart.totalPrice = calcTotalPrice(cart.products)

        localStorage.setItem('cart', JSON.stringify(cart))
        state.cart = cart

    }
    }
})

export const {getCart, addToCart, deleteProductFromCart, changeProductCount} = cartSlice.actions

export const cartReducer = cartSlice.reducer