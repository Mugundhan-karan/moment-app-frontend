import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../redux/features/auth/authSlice"
import momentReducer from "./features/moments/momentSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        moment: momentReducer,

    }
})