import { createAction, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'; 


const authSlice = createSlice({
    name: 'auth',
    initialState:{
        query: ''
    },
    reducers:{
      
    }
})

export const {create} = authSlice.actions

export default authSlice.reducer