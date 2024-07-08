import { useState } from "react";
import NavItem from "../common/NavItem/NavItem";
import SearchBar from "./SearchBar/SearchBar";
import { getMovieList, MOVIE_CATEGORY } from "../../redux/slices/movie-list/movie-list-slice";
import { useAppDispatch } from "../../redux/hooks";

const NavigationBar = () => {
    const dispatch = useAppDispatch()
    const movieCategory = ['Popular', 'Top Rated', 'Now Playing', 'Upcoming']
    const [activeIndex, setActiveIndex] = useState(0)
    const onClickHandler = (index: number, movieCategory: MOVIE_CATEGORY) => {
        setActiveIndex(index)
        dispatch(getMovieList({ movieCategory }))
    }

    return (
        <div className='h-16 bg-slate-700 flex justify-between items-center'>
            <nav className='pl-10 w-1/2 h-full flex items-center justify-start gap-4'>
                {movieCategory.map((category, index) => <NavItem key={index}
                    category={category}
                    isActive={index === activeIndex}
                    index={index}
                    onClickHandler={onClickHandler}
                />)}
            </nav>
            <SearchBar />
        </div>
    )
}

export default NavigationBar;