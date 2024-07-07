import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getMovieDetails } from "../../../api/api"
import { setAppProgressStatus } from "../app-slice/app-slice"

const initialState: MovieDetails = {
    adult: false,
    backdrop_path: '',
    budget: 0,
    genres: [],
    id: 0,
    original_title: '',
    overview: '',
    poster_path: '',
    release_date: '',
    revenue: 0,
    runtime: 0,
    tagline: '',
    title: '',
    video: false,
    vote_average: 0
}

export const getDetails = createAsyncThunk('movieDetails/getDetails',
    async (arg: { movieID: number }, { dispatch, rejectWithValue }) => {
        dispatch(setAppProgressStatus({ status: 'loading' }))
        try {
            const response = await getMovieDetails.getDetails(arg.movieID)
            dispatch(setAppProgressStatus({ status: "succeed" }))

            return { ...response.data }
        } catch (e) {
            return rejectWithValue('something went wrong :' + e)
        }
    }
)


const movieDetailsSlice = createSlice({
    name: 'movieDetails',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getDetails.fulfilled, (state, action) => {
            state.adult = action.payload.adult
            state.backdrop_path = action.payload.backdrop_path
            state.budget = action.payload.budget
            state.genres = action.payload.genres
            state.id = action.payload.id
            state.original_title = action.payload.original_title
            state.overview = action.payload.overview
            state.poster_path = action.payload.poster_path
            state.release_date = action.payload.release_date
            state.revenue = action.payload.revenue
            state.runtime = action.payload.runtime
            state.tagline = action.payload.tagline
            state.title = action.payload.title
            state.video = action.payload.video
            state.vote_average = action.payload.vote_average
        });
    }
})

interface MovieDetails {
    adult: boolean,
    backdrop_path: string
    budget: number
    genres: Array<{ id: number, name: string }>
    id: number
    original_title: string
    overview: string
    poster_path: string
    release_date: string
    revenue: number,
    runtime: number
    tagline: string
    title: string
    video: boolean
    vote_average: number
}

export default movieDetailsSlice.reducer;

