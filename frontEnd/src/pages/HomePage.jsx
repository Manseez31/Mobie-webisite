import Header from '../components/HomePageComp/Header'
import Banner from '../components/HomePageComp/Banner'
import MovieSection from '../components/HomePageComp/MovieSection'
import Footer from '../components/HomePageComp/Footer'
import { createContext, useState } from 'react'


export const MovieContext = createContext('');


const HomePage = () => {

  const [contextMovies, setContextMovies] = useState([]);

  return (
    <MovieContext.Provider value={{contextMovies, setContextMovies}}>
      <div className='h-auto w-[100%] bg-theme-dark text-gray-400 overflow-x-hidden'>
        <Header />
        <Banner />
        <MovieSection />
        <Footer />
      </div>
    </MovieContext.Provider>
  )
}

export default HomePage
