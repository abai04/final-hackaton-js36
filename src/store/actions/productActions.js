import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";
import { getConfig } from "../../helpers/functions";

export const addProduct = createAsyncThunk('products/addProduct', async (newProduct) => {
    try {
        await axios.post(`${API}/product/`, newProduct, getConfig())
    } catch (error) {
        throw error
    }
})
export const getCategories = createAsyncThunk(
  'products/getCategories',
  async () => {
    try {
      const result = await axios.get(`${API}/category/`);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
);
export const getProducts = createAsyncThunk('products/getProducts', async () => {
    try {
        const result = await axios.get(`${API}/product/`+window.location.search)
        return result.data
    } catch (error) {
        throw error
    }
})

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct', async (id, thunkAPI) => {
    try {
      await axios.delete(`${API}/product/${id}/`, getConfig())
      thunkAPI.dispatch(getProducts())
    } catch (error) {
      throw error
    }
  }
)

export const getOneProduct = createAsyncThunk(
  'products/getOneProduct',
  async (id) => {
    try {
      const result = await axios.get(`${API}/product/${id}/`, getConfig());

      return result.data;
    } catch (error) {
      throw error;
    }
  }
);

export const editProduct = createAsyncThunk( "products/editProduct", async (editedProduct) => {
  try {
    await axios.patch(
      `${API}/product/${editedProduct.get('id')}/`,
      editedProduct,
      getConfig()
    )
  } catch (error) {
    throw error
  }
})

export const addCategory = createAsyncThunk('products/addCategory', async (newCategory) => {
    try {
        await axios.post(`${API}/category/`, newCategory, getConfig())
    } catch (error) {
        throw error
    }
})


export const deleteCategory = createAsyncThunk(
  'products/deleteCategory', async (slug, thunkAPI) => {
    try {
      await axios.delete(`${API}/category/${slug}/`, getConfig())
      thunkAPI.dispatch(getCategories())
    } catch (error) {
      throw error
    }
  }
)

export const editCategory = createAsyncThunk( "products/editCategory", async (editedCategory) => {
  try {
    await axios.patch(
      `${API}/category/${editedCategory.slug}/`,
      editedCategory,
      getConfig()
    )
  } catch (error) {
    throw error
  }
})