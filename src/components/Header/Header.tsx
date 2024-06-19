import popcorn from '../../assets/images/header/popcorn.png'
import movieDB from '../../assets/images/header/tmdb.png'

const Header = () => {
    return (
        <div className='flex justify-between bg-slate-800 h-24 w-full text-white'>
            <div className='flex h-full items-center pl-10 w-1/2'>
                <img className='h-12' src={popcorn} alt="" />
                <div className='text-3xl pl-6 font-header'>Movie Land</div>
            </div>
            <div className='flex w-1/2 h-full items-center justify-end pr-10'>
                <a href=''><img className='h-[50px]' src={movieDB} alt='movieDB' /></a>
            </div>
        </div>
    )
}

export default Header;