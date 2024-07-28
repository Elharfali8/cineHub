import { configureStore } from "@reduxjs/toolkit";
import featuredReducer from "./features/featured/featuredSlice";
import topRatedReducer from "./features/topRated/topRatedSlice";
import genresReducer from "./features/genres/genresSlice";
import mediaReducer from "./features/media/mediaSlice";
import singleReducer from "./features/singlePage/singleSlice";


export const store = configureStore({
    reducer: {
        featured: featuredReducer,
        top_rated: topRatedReducer,
        genres: genresReducer,
        media: mediaReducer,
        singlePage: singleReducer
    }
})