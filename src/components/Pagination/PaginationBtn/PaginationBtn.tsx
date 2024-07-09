import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getMovieList } from "../../../redux/slices/movie-list/movie-list-slice";

const PaginationBtn: FC<PaginationBtnProps> = ({ sign, activePage, value }) => {
    const dispatch = useAppDispatch()
    const { currentCategory } = useAppSelector(state => state.movieListSlice)
    const onClickHandler = () => dispatch(getMovieList({ page: value, movieCategory: currentCategory }))

    return (
        <button className={`box-border px-3 py-1 mx-1 ${activePage === value ? 'bg-slate-400' : 'bg-slate-300'} rounded-md`} onClick={onClickHandler} disabled={sign ? true : false}>
            {sign ? sign : value}
        </button>
    )
}

type PaginationBtnProps = {
    value: number
    sign?: string
    activePage: number
}

export default PaginationBtn;