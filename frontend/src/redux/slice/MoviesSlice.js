import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  movies: [],
  error: null,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await axios.get("http://localhost:8080/api/movies");
    dispatch(setMovies(response.data.movies));
  } catch (error) {
    dispatch(setError(error));
  }
};

export const { setMovies, setError } = moviesSlice.actions;

export default moviesSlice.reducer;
