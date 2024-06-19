import Header from "./components/Header/Header"
import MainPage from "./components/pages/MainPage/MainPage"
import NavigationBar from "./components/NavigationBar/NavigationBar"
import CardDetailsPage from "./components/pages/CardDetailsPage/CardDetailsPage"

function App() {

  return (
    <div className=''>
      <Header />
      <NavigationBar />
      <MainPage />
      {/* <CardDetailsPage /> */}
    </div>
  )
}

export default App
