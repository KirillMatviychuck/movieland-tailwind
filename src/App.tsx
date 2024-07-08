import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"
import NavigationBar from "./components/NavigationBar/NavigationBar"
import CardDetailsPage from "./components/pages/CardDetailsPage/CardDetailsPage"
import MainPage from "./components/pages/MainPage/MainPage"
import { useAppDispatch } from "./redux/hooks"
import { getMovieList, MOVIE_CATEGORY } from "./redux/slices/movie-list/movie-list-slice"

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovieList({ movieCategory: MOVIE_CATEGORY.POPULAR }))
  }, [dispatch])

  return (
    <div className=''>
      <Header />
      <NavigationBar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/movie/:movieID' element={<CardDetailsPage />} />
      </Routes>
    </div>
  )
}

export default App
