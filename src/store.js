import { configureStore } from "@reduxjs/toolkit";
import featuredReducer from "./features/featured/featuredSlice";


export const store = configureStore({
    reducer: {
        featured: featuredReducer,
    }
})