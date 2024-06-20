import Header from "./components/Header/Header"
import MainPage from "./components/pages/MainPage/MainPage"
import NavigationBar from "./components/NavigationBar/NavigationBar"
import { Route, Routes } from "react-router-dom"
import CardDetailsPage from "./components/pages/CardDetailsPage/CardDetailsPage"

function App() {

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
