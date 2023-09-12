import React, { useState } from 'react'
import HeroSection from '../../components/home/HeroSection'
import FeaturedMovie from '../../components/home/FeaturedMovie'
import Footer from '../../components/home/Footer'
import Navbar from '../../components/home/Navbar'
import useGetPopularMovies from '../../libs/queries/useGetPopularMovie'

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResult, setSearchResult] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const { data, isLoading } = useGetPopularMovies()

  return (
    <div>
      {isLoading
        ? (
        <div className='h-[100vh] bg-[#000] w-[100vw] flex justify-center items-center'>
          <span className="loader"></span>
        </div>
          )
        : (
        <div>
          <Navbar
            setSearchResult={setSearchResult}
            setIsSearching={setIsSearching}
            setSearchQuery={setSearchQuery}
          />
          <div className="mt-[-20vh] lg:mt-[-10vh]">
            <HeroSection data={data} />
            <FeaturedMovie
              searchResult={searchResult}
              isSearching={isSearching}
              searchQuery={searchQuery}
            />
            <Footer />
          </div>
        </div>
          )}
    </div>
  )
}

export default HomePage
