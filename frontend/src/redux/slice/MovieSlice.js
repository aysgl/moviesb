import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import API from "../api";

const initialState = {
  movie: [],
  error: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie: (state, action) => {
      state.movie = action.payload;
      state.error = null;
    },
    postMovie: (state, action) => {
      state.movie = action.payload;
      state.error = null;
    },
    deleteMovie: (state, action) => {
      state.movie = state.movie.filter((movie) => movie.id !== action.payload);
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const fetchMovie = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${API}/movies/${id}`);
    // const response = await axios.get(`http://localhost:8080/api/movies/${id}`);
    dispatch(setMovie(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const fetchPostMovie = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${API}/movies`, data);
    // const response = await axios.post(`http://localhost:8080/api/movies`, data);
    dispatch(postMovie(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const fetchDeleteMovie = (id) => async (dispatch) => {
  try {
    const response = await axios.delete(`${API}/movies/${id}`);
    // const response = await axios.delete(
    //   `http://localhost:8080/api/movies/${id}`
    // );
    dispatch(deleteMovie(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const { setMovie, postMovie, deleteMovie, setError } =
  movieSlice.actions;

export default movieSlice.reducer;
