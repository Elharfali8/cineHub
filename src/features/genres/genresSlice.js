import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    genres: [],
    error: null
}

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export const fetchGenres = createAsyncThunk('genres/fetchGenres', async ({ type }) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiKey}`
        }
    };
    
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?language=en`, options)
        const data = response.data
        return data.genres; // Assuming the API returns { genres: [...] }
    } catch (error) {
        throw Error(error.message || 'Failed to fetch data');
    }
})

export const genresSlice = createSlice({
    name: 'genres',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGenres.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchGenres.fulfilled, (state, action) => {
                state.isLoading = false;
                state.genres = action.payload;
                state.error = null;
            })
            .addCase(fetchGenres.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch data';
            });
    }
})

export default genresSlice.reducer;
