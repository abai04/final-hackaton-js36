import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";
import { getConfig } from "@testing-library/react";

export const register = createAsyncThunk('account/register', async (newUser) => {
    try{
        await axios.post(`${API}/account/register/`, newUser)
    } catch (error){
        throw error
    }
})

export const login = createAsyncThunk('account/login', async (userData) => {
    try{
        const result = await axios.post(`${API}/account/login/`, userData)
        localStorage.setItem('token', JSON.stringify(result.data))
        localStorage.setItem('email', userData.email)
        return userData.email
    }catch (error) {
        throw error
    }
})

export const logout = () => {
  localStorage.removeItem('tokens');
  localStorage.removeItem('email');
};

export const checkAuth = createAsyncThunk('auth/checkAuth', async () => {
    try{
         const tokens = JSON.parse(localStorage.getItem('tokens'));
        const result = await axios.post(`${API}/account/refresh/`, {
            refresh: tokens.refresh
        },
        getConfig)
        
        localStorage.setItem(
      'tokens',
      JSON.stringify({
        access: result.data.access,
        refresh: tokens.refresh,
      })
    );
    }catch (error){
        logout()
    }
})