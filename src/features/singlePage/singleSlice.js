import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    isLoading: false,
    data: [],
    error: null
}

const apiKey = import.meta.env.VITE_TMDB_API_KEY

export const fetchSingle = createAsyncThunk('singlePage/fetchSingle', async ({ type, id }) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${apiKey}`
        }
      };

    try {
        const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}?language=en-US`, options)
        const data = response.data
        return data
    } catch (error) {
        throw Error(error.message || 'Failed to fetch data');
    }
})

export const singleSlice = createSlice({
    name: 'singlePage',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSingle.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchSingle.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
                state.error = null;
            })
            .addCase(fetchSingle.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch data';
            });
    }
})

export default singleSlice.reducer