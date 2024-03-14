import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./slice/MoviesSlice";
import movieReducer from "./slice/MovieSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    movie: movieReducer,
  },
});
