import { createSlice } from "@reduxjs/toolkit"
import { getCategories, getOneProduct, getProducts } from "../actions/productActions"

const initialState = {
    productList: [],
    categories: [],
    oneProduct: null,
    loading: false,
    error: null,
    pages: 1
}
export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: {
        [getProducts.fulfilled]: (state, action) => {
            state.loading = false
            state.productList = action.payload.results
            state.pages = Math.ceil(action.payload.count / 8)
        },
        [getProducts.pending]: (state) => {
            state.loading = true
        },
        [getProducts.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        },
        [getCategories.fulfilled]: (state, action) => {
            state.loading = false
            state.categories = action.payload
        },
        [getCategories.pending]: (state) => {
            state.loading = true
        },
        [getCategories.rejected]: (state) => {
            state.loading = false
        },
        [getOneProduct.fulfilled] : (state, action) => {
            state.loading = false
            state.oneProduct = action.payload
        },
        [getOneProduct.pending] : (state) => {
            state.loading = true
        },
        [getOneProduct.rejected] : (state) => {
            state.loading = false

        }
    }
        
})

export const {} = productSlice.actions

export const productReducer = productSlice.reducer