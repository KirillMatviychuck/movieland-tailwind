import { useAppSelector } from "../../redux/hooks";
import PaginationBtn from "./PaginationBtn/PaginationBtn";

const Pagination = () => {
    const { page: currentPage } = useAppSelector(state => state.movieListSlice)
    const totalPages = 500;
    const pagesArr = []
    const difference = totalPages - 6;

    if (currentPage >= 495) {
        for (let i = totalPages - 1; i >= 495; i--) {
            pagesArr.unshift(i)
        }
    } else {
        for (let i = currentPage; i < currentPage + 7; i++) {
            pagesArr.push(i)
        }
    }
    return (
        <div className='mx-40 my-6 flex justify-center items-center'>
            {currentPage > 1 && <PaginationBtn value={1} activePage={currentPage} />}
            {currentPage > 2 && <PaginationBtn sign='...' value={0} activePage={currentPage} />}
            {pagesArr.map(page => <PaginationBtn value={page} activePage={currentPage} />)}
            {currentPage <= difference && <PaginationBtn sign='...' value={0} activePage={currentPage} />}
            <PaginationBtn value={totalPages} activePage={currentPage} />
        </div>
    )
}

export default Pagination;