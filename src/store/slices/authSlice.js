import { createSlice, getDefaultMiddleware } from "@reduxjs/toolkit"
import { getYourAccount, login, register } from "../actions/authActions"

const initialState = {
    currentUser: localStorage.getItem('email'),
    error: null, 
    loading: false,
    userInfo: null
}

export const authSlice = createSlice({
name: "auth",
initialState,
reducers:{
    setCurrentUser: (state) => {
        state.currentUser = null
    }
},

extraReducers: {
    [register.pending] : (state) => {
        state.loading = true
    },
    [register.fulfilled] : (state) => {
        state.loading = false
    },
    [register.rejected] : (state, action) => {
        state.loading = false
        state.error = action.error.message
    },
    [login.pending] : (state) => {
        state.loading = true
    },
    [login.fulfilled] : (state, action) => {
        state.loading = false
        state.currentUser = action.payload
    },
    [login.rejected] : (state, action) => {
        state.loading = false
        state.error = action.error.message
    },
    [getYourAccount.fulfilled] : (state, action) => {
            state.loading = false
            state.userInfo = action.payload
        },
    [getYourAccount.pending] : (state) => {
            state.loading = true
    },
    [getYourAccount.rejected] : (state) => {
            state.loading = false
        },
},
})

export const {setCurrentUser} = authSlice.actions;
export const authReducer = authSlice.reducer;