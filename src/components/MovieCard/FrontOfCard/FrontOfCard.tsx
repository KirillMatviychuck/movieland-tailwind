import moviePoster from '../../../assets/images/main-page/no-poster-found.jpg';

const FrontOfCard = () => {
    return (
        <div className='absolute backface-hidden rounded-3xl w-full h-full'>
            <img className='rounded-3xl' src={moviePoster} alt="movie poster" />
        </div>
    )
}

export default FrontOfCard;