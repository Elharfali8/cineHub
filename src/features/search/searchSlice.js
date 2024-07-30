import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    search: [],
    query: '',
    pages: 1,
    error: null
}

const apiKey = import.meta.env.VITE_TMDB_API_KEY

export const fetchSearch = createAsyncThunk('search/fetchSearch', async ({ query, page, qPage }) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${apiKey}`
      }
    };
  
    try {
      let response;
      if (query) {
        response = await axios.get(`https://api.themoviedb.org/3/search/multi?query=${query}&include_adult=false&language=en-US&page=${qPage}`, options);
      } else {
        const moviesResponse = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, options);
        const tvResponse = await axios.get(`https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=${page}`, options);
        response = {
          data: {
            results: [
              ...moviesResponse.data.results.map(movie => ({ ...movie, media_type: 'movie' })),
              ...tvResponse.data.results.map(tvShow => ({ ...tvShow, media_type: 'tv' }))
            ]
          }
        };
      }
      const data = response.data.results;
      const pages = response.data.total_pages || response.total_pages;
      return { data, pages };
    } catch (error) {
      throw Error(error.message || 'Failed to fetch data');
    }
  });
  

  export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
      setQuery: (state, action) => {
        state.query = action.payload;
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchSearch.pending, (state) => {
          state.isLoading = true;
          state.error = null;
        })
        .addCase(fetchSearch.fulfilled, (state, action) => {
          state.isLoading = false;
          state.search = action.payload.data;
          state.pages = action.payload.pages;
          state.error = null;
        })
        .addCase(fetchSearch.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.error.message || 'Failed to fetch data';
        });
    }
  });
  
  export const { setQuery } = searchSlice.actions;
  
  export default searchSlice.reducer;