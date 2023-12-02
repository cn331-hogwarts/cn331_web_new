import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice.jsx";

export const store = configureStore({
    reducer: {
        auth:authReducer
    },
})