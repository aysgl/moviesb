// src/redux/slices/moviesSlice.js
import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import API_URL from '../api'

const initialState = {
    movies: [],
    error: null
}

export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.movies = action.payload
            state.error = null
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})

// Async action to fetch movies
export const fetchMovies = () => async dispatch => {
    try {
        const response = await axios.get(`${API_URL}/movies`, {
            headers: {'Cache-Control': 'no-cache'}
        })
        console.log(response.data)
        dispatch(setMovies(response.data.movies))
    } catch (error) {
        dispatch(setError(error.response?.data?.message || error.message))
    }
}

export const {setMovies, setError} = moviesSlice.actions

export default moviesSlice.reducer
