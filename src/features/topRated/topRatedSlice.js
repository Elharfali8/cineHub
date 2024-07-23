import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    top_rated: [],
    error: null
}

const apiKey = import.meta.env.VITE_TMDB_API_KEY

export const fetchTopRated = createAsyncThunk('topRated/fetchTopRated', async ({ type, page }) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiKey}`
        }
    };

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/${type}/top_rated?language=en-US&page=${page}`, options)    
        const data = response.data
        return data
    } catch (error) {
        return error.message || 'Failed to fetch data';
    }
})

const topRatedSlice = createSlice({
    name: 'top_rated',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopRated.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchTopRated.fulfilled, (state, action) => {
                state.isLoading = false;
                state.top_rated = action.payload.results;
                state.error = null;
            })
            .addCase(fetchTopRated.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload || 'Failed to fetch data';
            });
    }
})


export default topRatedSlice.reducer