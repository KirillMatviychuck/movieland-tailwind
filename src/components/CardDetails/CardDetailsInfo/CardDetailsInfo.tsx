import releaseImg from '../../../assets/images/main-page/movie/clock.png';
import revenueImg from '../../../assets/images/main-page/movie/dollar.png';
import durationImg from '../../../assets/images/main-page/movie/reverse.png';
import { useAppSelector } from '../../../redux/hooks';
import { correctImgPath, correctRating, correctReleaseDate } from '../../../utils/utils';

const CardDetailsInfo = () => {
    const { poster_path, title, vote_average, tagline, overview, genres, release_date, revenue, runtime } = useAppSelector(state => state.movieDetailsSlice)
    const fixDuration = (duration: number) => {
        const hours = Math.floor(duration / 60)
        const minutes = duration - (hours * 60)

        return `${hours}h ${minutes}m`
    }
    return (
        <div className='absolute flex justify-center items-center h-full w-full'>
            <div className='w-4/6 h-4/6 flex'>
                <img src={correctImgPath(poster_path)} alt='inside poster' className='h-full w-[26.4%] rounded-s-2xl' />
                <div className='flex flex-col justify-between bg-black h-full w-[73.6%] bg-opacity-80 rounded-e-2xl text-white z-0'>
                    <div className='mt-14 flex justify-between items-center w-full px-10'>
                        <p className='text-orange-700 text-2xl font-extrabold'> {title}</p>
                        <p className='p-3 flex justify-center items-center border-2 border-green-700 rounded-full'>{correctRating(vote_average)}</p>
                    </div>
                    <div className='relative flex flex-col justify-center items-center px-10'>
                        {tagline}
                        <span className='absolute h-[2px] w-16 bg-orange-700 top-8'></span>
                    </div>
                    <div className='px-10'>
                        {overview}
                    </div>
                    <div className='w-full text-orange-700 font-extrabold t px-10'>
                        GENRES: {genres.map(genre => <span className='ml-5 text-white font-normal'>{genre.name}</span>)}
                    </div>
                    <div className='bg-black w-full h-16 bg-opacity-100 rounded-ee-2xl flex justify-between items-center px-10'>
                        <div className='flex justify-center items-center'>
                            <img src={releaseImg} className='h-8' alt="release date" />
                            <span className='ml-2'>Release date: {correctReleaseDate(release_date)}</span>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src={durationImg} className='h-8' alt="duration time" />
                            <span className='ml-2'>Duration: {fixDuration(runtime)}</span>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src={revenueImg} className='h-8' alt="revenue" />
                            <span className='ml-2'>Revenue: {revenue}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetailsInfo;