import { createSlice } from "@reduxjs/toolkit"
import { getProducts } from "../actions/productActions"

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
            state.pages = Math.ceil(action.payload.count / 6)
        },
        [getProducts.pending]: (state) => {
            state.loading = true
        },
        [getProducts.rejected]: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
    }
        
})

export const {} = productSlice.actions

export const productReducer = productSlice.reducer