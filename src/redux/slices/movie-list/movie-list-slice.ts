import { GetMovieUnit } from '../../../api/apiTypes';
import { getMovies } from './../../../api/api';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export enum MOVIE_CATEGORY {
    POPULAR = 'popular',
    TOP_RATED = 'top',
    NOW_PLAYING = 'now-playing',
    UPCOMING = 'upcoming'
}

const initialState: MovieList = {
    page: 0,
    movies: [],
    total_pages: 0,
    total_movies: 0
}

export const getMovieList = createAsyncThunk('movieList/getMovieList',
    async (arg: { movieCategory: MOVIE_CATEGORY, page?: number }, { rejectWithValue }) => {
        if (arg.movieCategory === 'popular') {
            try {
                const response = await getMovies.getPopularMovies(arg.page)
                return { ...response.data }
            } catch (e) {
                return rejectWithValue('something went wrong :' + e)
            }
        }
        if (arg.movieCategory === 'top') {
            try {
                const response = await getMovies.getTopRatedMovies(arg.page)
                return { ...response.data }
            } catch (e) {
                return rejectWithValue('something went wrong :' + e)
            }
        }
        if (arg.movieCategory === 'now-playing') {
            try {
                const response = await getMovies.getNowPlayingMovies(arg.page)
                return { ...response.data }
            } catch (e) {
                return rejectWithValue('something went wrong :' + e)
            }
        } else {
            try {
                const response = await getMovies.getUpcomingMovies(arg.page)
                return { ...response.data }
            } catch (e) {
                return rejectWithValue('something went wrong :' + e)
            }
        }

    }
)


const movieListSlice = createSlice({
    name: 'movieList',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getMovieList.fulfilled, (state, action) => {
            state.page = action.payload.page
            state.movies = action.payload.results
            state.total_pages = action.payload.total_pages
            state.total_movies = action.payload.total_results
        });
    }
})



interface MovieList {
    page: number,
    movies: GetMovieUnit[],
    total_pages: number,
    total_movies: number
}

export default movieListSlice.reducer;

