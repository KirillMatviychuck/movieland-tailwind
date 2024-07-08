import axios from "axios";
import { GetMovieDataResponse, GetMovieDetails } from "./apiTypes";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})
const key = '016ccb02cdd8595021a6a64e763a449d';

export const getMovies = {
    getPopularMovies(page?: number) {
        return instance.get<GetMovieDataResponse>('movie/popular', { params: { page, api_key: key } })
    },
    getTopRatedMovies(page?: number) {
        return instance.get<GetMovieDataResponse>('movie/top_rated', { params: { page, api_key: key } })
    },
    getNowPlayingMovies(page?: number) {
        return instance.get<GetMovieDataResponse>('movie/now_playing', { params: { page, api_key: key } })
    },
    getUpcomingMovies(page?: number) {
        return instance.get<GetMovieDataResponse>('movie/upcoming', { params: { page, api_key: key } })
    }
}

export const getMovieDetails = {
    getDetails(movieID: number) {
        return instance.get<GetMovieDetails>(`movie/${movieID}`, { params: { api_key: key } })
    }
}