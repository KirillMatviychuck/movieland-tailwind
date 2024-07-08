import { FC } from "react";
import { MOVIE_CATEGORY } from "../../../redux/slices/movie-list/movie-list-slice";

const NavItem: FC<Props> = ({ category, isActive, onClickHandler, index }) => {
    const selectCategory = (category: string): MOVIE_CATEGORY => {
        if (category === 'Popular') return MOVIE_CATEGORY.POPULAR
        if (category === 'Top Rated') return MOVIE_CATEGORY.TOP_RATED
        if (category === 'Now Playing') return MOVIE_CATEGORY.NOW_PLAYING
        else return MOVIE_CATEGORY.UPCOMING
    }

    const currentCategory = selectCategory(category)

    return (
        <div className={`h-[42px] min-w-[100px] rounded-xl ${isActive ? 'bg-cyan-600' : 'bg-inherit'} text-white p-4 border-gray-800 border cursor-pointer`}
            onClick={() => onClickHandler(index, currentCategory)}>
            <span className='h-full flex items-center justify-center'>{category}</span>
        </div>
    )
}

type Props = {
    category: string
    isActive?: boolean
    index: number
    onClickHandler: (index: number, movieCategory: MOVIE_CATEGORY) => void
}

export default NavItem;