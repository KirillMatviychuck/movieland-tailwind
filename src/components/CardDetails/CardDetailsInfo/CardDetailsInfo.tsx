import insidePoster from '../../../assets/images/test-imgs/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg';
import revenue from '../../../assets/images/main-page/movie/dollar.png';
import release from '../../../assets/images/main-page/movie/clock.png';
import duration from '../../../assets/images/main-page/movie/reverse.png';


const genres = ['Action', 'Comedy', 'Horror']

const CardDetailsInfo = () => {
    return (
        <div className='absolute flex justify-center items-center h-full w-full'>
            <div className='w-4/6 h-4/6 flex'>
                <img src={insidePoster} alt='inside poster' className='h-full w-[26.4%] rounded-s-2xl' />
                <div className='flex flex-col justify-between bg-black h-full w-[73.6%] bg-opacity-80 rounded-e-2xl text-white z-0'>
                    <div className='mt-14 flex justify-between items-center w-full px-10'>
                        <p className='text-orange-700 text-2xl font-extrabold'> Godzilla x Kong: The New Empire</p>
                        <p className='p-3 flex justify-center items-center border-2 border-green-700 rounded-full'>7.3</p>
                    </div>
                    <div className='relative flex flex-col justify-center items-center px-10'>
                        The world is mine
                        <span className='absolute h-[2px] w-16 bg-orange-700 top-8'></span>
                    </div>
                    <div className='px-10'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo laudantium doloremque autem temporibus ratione veritatis quis est deleniti alias consectetur a, id harum eaque beatae fugit quaerat magnam officia maiores voluptas recusandae quas magni itaque. At amet itaque eos nemo.
                    </div>
                    <div className='w-full text-orange-700 font-extrabold t px-10'>
                        GENRES: {genres.map(genre => <span className='ml-5 text-white font-normal'>{genre}</span>)}
                    </div>
                    <div className='bg-black w-full h-16 bg-opacity-100 rounded-ee-2xl flex justify-between items-center px-10'>
                        <div className='flex justify-center items-center'>
                            <img src={release} className='h-8' alt="release date" />
                            <span className='ml-2'>Release date: 08-05-2024</span>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src={duration} className='h-8' alt="duration time" />
                            <span className='ml-2'>Duration: 2h 25m</span>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src={revenue} className='h-8' alt="revenue" />
                            <span className='ml-2'>Revenue: 21942151</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetailsInfo;