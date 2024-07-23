import { configureStore } from "@reduxjs/toolkit";
import featuredReducer from "./features/featured/featuredSlice";
import topRatedReducer from "./features/topRated/topRatedSlice";


export const store = configureStore({
    reducer: {
        featured: featuredReducer,
        top_rated: topRatedReducer
    }
})