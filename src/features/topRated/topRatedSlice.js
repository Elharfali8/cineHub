import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    top_rated: [],
    error: null
}

const apiKey = import.meta.env.VITE_TMDB_API_KEY

export const fetchTopRated = createAsyncThunk('topRated/fetchTopRated', async ({ type, page = 1 }) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    };
    const url = new URL(`https://api.themoviedb.org/3/${type}/top_rated`);
    url.searchParams.append('language', 'en-US');
    url.searchParams.append('page', page);
  
    try {
      const response = await axios.get(url.toString(), options);
      return response.data.results;
    } catch (error) {
      throw Error(error.message || 'Failed to fetch data');
    }
  });

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
            state.top_rated = action.payload;
            state.error = null;
          })
          .addCase(fetchTopRated.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message || 'Failed to fetch data';
          });
      }
})


export default topRatedSlice.reducer