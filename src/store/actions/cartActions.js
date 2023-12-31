import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";
import { getCartInStorage, getConfig } from "../../helpers/functions";

export const order = createAsyncThunk("cart/order", async(order) => {
    await axios.post(`${API}/order/`, order, getConfig())
})