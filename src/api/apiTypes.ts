export type GetMovieDataResponse = {
    page: number
    results: GetMovieUnit[],
    total_pages: number,
    total_results: number
}

export type GetMovieUnit = {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export type GetMovieDetails = {
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