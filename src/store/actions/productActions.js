import { createAsyncThunk } from "@reduxjs/toolkit";
import { getConfig } from "@testing-library/react";
import axios from "axios";
import { API } from "../../helpers/consts";

export const addProduct = createAsyncThunk('products/addProduct', async (newProduct) => {
    try {
        await axios.post(`${API}/product/`, newProduct, getConfig())
    } catch (error) {
        throw error
    }
})
export const getProducts = createAsyncThunk('products/getProducts', async () => {
    try {
        const result = await axios.get(`${API}/product/`+window.location.search, getConfig())
        return result.data
    } catch (error) {
        throw error
    }
})