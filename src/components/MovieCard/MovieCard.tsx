import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { getDetails } from "../../redux/slices/movie-details/movie-details";
import BackOfCard from "./BackOfCard/BackOfCard";
import FrontOfCard from "./FrontOfCard/FrontOfCard";

const MovieCard: FC<MovieCardProps> = ({ movieID, moviePoster, movieRating, movieTitle, releaseDate }) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onClickHandler = (movieID: number) => {
        dispatch(getDetails({ movieID }))
        navigate(`/movie/${movieID}`)
    }
    return (
        <Link to={`/movie/${movieID}`} onClick={() => onClickHandler(movieID)} className='h-[350px] w-[250px] rounded-3xl bg-transparent cursor-pointer group perspective'>
            <div className='group-hover:my-rotate-y-180 relative h-full w-full preserve-3d duration-1000'>
                <FrontOfCard moviePoster={moviePoster} />
                <BackOfCard movieRating={movieRating} movieTitle={movieTitle} releaseDate={releaseDate} />
            </div>
        </Link>
    )
}

type MovieCardProps = {
    movieTitle: string
    movieRating: number
    releaseDate: string
    moviePoster: string
    movieID: number
}

export default MovieCard;