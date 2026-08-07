import { createAction, createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: 'auth',
    initialState:{
        query: ''
    },
    reducers:{
        create(state,action){
            console.log(action.payload)
        }
    }
})

export const {create} = authSlice.actions

export default authSlice.reducer