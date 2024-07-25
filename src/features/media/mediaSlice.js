import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export const fetchMedia = createAsyncThunk('media/fetchMedia', async ({ type, genre, page = 1 }) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiKey}`
        }
    };
    const url = new URL(`https://api.themoviedb.org/3/discover/${type}`);
    url.searchParams.append('language', 'en-US');
    url.searchParams.append('sort_by', 'popularity.desc');
    url.searchParams.append('page', page);

    if (genre && genre !== 'all') {
        url.searchParams.append('with_genres', genre);
    }

    try {
        const response = await axios.get(url.toString(), options);
        return response.data.results; 
    } catch (error) {
        throw Error(error.message || 'Failed to fetch data');
    }
});

const mediaSlice = createSlice({
    name: 'media',
    initialState: {
        isLoading: false,
        data: [],
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMedia.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchMedia.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchMedia.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch data';
            });
    }
});

export default mediaSlice.reducer;
