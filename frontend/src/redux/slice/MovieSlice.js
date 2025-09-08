import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const API = 'http://localhost:8888'

const initialState = {
    movies: [],
    movie: null,
    loading: false,
    error: null
}

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setMovies: (state, action) => {
            state.movies = action.payload
            state.error = null
        },
        setMovie: (state, action) => {
            state.movie = action.payload
            state.loading = false
        },
        postMovie: (state, action) => {
            state.movies.push(action.payload)
            state.movie = action.payload
            state.error = null
        },
        deleteMovie: (state, action) => {
            state.movies = state.movies.filter(m => m.id !== action.payload)
            state.movie = null
            state.error = null
        },
        setError: (state, action) => {
            state.error = action.payload
            state.loading = false
        }
    }
})

export const {
    setLoading,
    setMovies,
    setMovie,
    postMovie,
    deleteMovie,
    setError
} = movieSlice.actions

// Async actions
export const fetchMovie = id => async dispatch => {
    dispatch(setLoading(true))
    try {
        const res = await axios.get(`${API}/movies/${id}`)
        dispatch(setMovie(res.data))
    } catch (error) {
        dispatch(setError(error.message))
    } finally {
        dispatch(setLoading(false))
    }
}

export const fetchMovies = () => async dispatch => {
    dispatch(setLoading(true))
    try {
        const res = await axios.get(`${API}/movies`)
        dispatch(setMovies(res.data.movies))
    } catch (error) {
        dispatch(setError(error.message))
    } finally {
        dispatch(setLoading(false))
    }
}

export const fetchPostMovie = formData => async dispatch => {
    try {
        const response = await axios.post(`${API}/movies`, formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        })

        // FormData içeriğini görmek için:
        for (let [key, value] of formData.entries()) {
            console.log(key, value)
        }

        console.log('response.data', response.data)
        dispatch(postMovie(response.data))
        return response.data
    } catch (error) {
        dispatch(setError(error.response?.data?.message || error.message))
        throw error
    }
}

export const fetchDeleteMovie = id => async dispatch => {
    dispatch(setLoading(true))
    try {
        await axios.delete(`${API}/movies/${id}`)
        dispatch(deleteMovie(id))
    } catch (error) {
        dispatch(setError(error.response?.data?.message || error.message))
    } finally {
        dispatch(setLoading(false))
    }
}

export default movieSlice.reducer
