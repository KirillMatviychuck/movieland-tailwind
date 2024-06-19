import searchIcon from '../../../assets/images/header/bottom-header/images/search.png'

const SearchBar = () => {
    return (
        <div className='flex justify-between items-center min-w-[300px] h-[42px] bg-slate-800 rounded-2xl mr-10'>
            <div className='pl-4 h-[20px] rounded-full w-[40px]'><img src={searchIcon} className='h-full' alt='search icon' /></div>
            <div className='pl-4 flex justify-start items-center w-full h-full text-white'><input type="text" className='bg-transparent outline-none' /></div>
        </div>
    )
}

export default SearchBar;