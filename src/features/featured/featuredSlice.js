import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    featured: [],
    error: null
}

const apiKey = import.meta.env.VITE_TMDB_API_KEY

export const fetchFeatured = createAsyncThunk('featured/fetchFeatured', async ({ type, currentMedia, page }) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiKey}`
        }
    };
    
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/${type}/${currentMedia}?language=en-US&page=${page}`, options)
        const data = response.data
        return data
    } catch (error) {
        return error.message || 'Failed to fetch data';
    }
})


export const featuredSlice = createSlice({
    name: 'featured',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFeatured.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchFeatured.fulfilled, (state, action) => {
                state.isLoading = false;
                state.featured = action.payload.results;
                state.error = null;
            })
            .addCase(fetchFeatured.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'Failed to fetch data';
            });
    }
})


export default featuredSlice.reducer