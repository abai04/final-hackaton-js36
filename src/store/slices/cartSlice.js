import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: { products: [], totalPrice: 0 }, 
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    getCart: (state, action) => {
      state.cart = action.payload;
    },
    changeProductCount: (state, action) => {
      const { id, count } = action.payload;
      const product = state.cart.products.find((item) => item.id === id);

      if (product) {
        
        product.count = count;

        state.cart.totalPrice = state.cart.products.reduce(
          (total, item) => total + item.price * item.count,
          0
        );
      }
    },

    deleteProductFromCart: (state, action) => {
      const id = action.payload;
      state.cart.products = state.cart.products.filter((item) => item.id !== id);
      state.cart.totalPrice = state.cart.products.reduce(
        (total, item) => total + item.price * item.count,
        0
      );
    },
  },
});

export const { getCart, changeProductCount, deleteProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;

