import { useAppSelector } from "../../../redux/hooks";
import MovieCard from "../../MovieCard/MovieCard";
import Pagination from "../../Pagination/Pagination";

const MainPage = () => {
    const { movies } = useAppSelector(state => state.movieListSlice)
    return (
        <div>
            <div className='mx-40 my-6 flex justify-center items-center flex-wrap gap-10'>
                {movies.map(movie => <MovieCard key={movie.id}
                    movieID={movie.id}
                    moviePoster={movie.poster_path}
                    movieRating={movie.vote_average}
                    movieTitle={movie.original_title}
                    releaseDate={movie.release_date} />)}
            </div>
            <Pagination />
        </div>
    )
}

export default MainPage;