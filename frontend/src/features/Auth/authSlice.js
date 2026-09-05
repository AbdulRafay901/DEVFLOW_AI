import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    user: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        setCredentials: (state, action) => {
            const { token, user } = action.payload;

            state.token = token;
            state.user = user;
            state.isAuthenticated = true;

            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
        },

        loadCredentials: (state) => {
            const token = localStorage.getItem("token");
            const user = localStorage.getItem("user");

            if (token) {
                state.token = token;
                state.user = user ? JSON.parse(user) : null;
                state.isAuthenticated = true;
            }
        },

        logout: (state) => {
            state.token = null;
            state.user = null;
            state.isAuthenticated = false;

            localStorage.removeItem("token");
            localStorage.removeItem("user");
        },
    },
});

export const {
    setCredentials,
    loadCredentials,
    logout,
} = authSlice.actions;

export default authSlice.reducer;