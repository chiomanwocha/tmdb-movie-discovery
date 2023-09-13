/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import search from '../../assets/svgs/Search.svg'
import hamburgerMenu from '../../assets/svgs/Menu.svg'
import useSearch from '../../hooks/useSearch'
import useSearchMovie from '../../libs/queries/useSearchMovie'
import Logo from '../common/Logo'

const Navbar = ({
  setSearchResult,
  setIsSearching,
  setSearchQuery: setQuery
}) => {
  const [scrolling, setScrolling] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { debouncedValue } = useSearch(searchQuery)
  const { data: searchResult, isLoading } = useSearchMovie(debouncedValue)
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true)
    } else {
      setScrolling(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (searchResult) {
      setSearchResult(searchResult)
    }
    setIsSearching(isLoading)
    setQuery(searchQuery)
  }, [searchResult, isLoading, searchQuery])

  return (
    <div
      className={`${
        scrolling ? 'bg-transparentBlack nav-blur' : 'bg-transparent'
      } top-0 sticky flex flex-wrap items-center text-white justify-between py-3 px-4 lg:px-24 z-20 gap-2 md:gap-0`}
    >
      <div>
        <Logo />
      </div>
      <div className="flex-grow-0 w-full md:w-[40%]">
        <div className="flex p-2 border items-center rounded-md">
          <input
            type="text"
            placeholder="What do you want to watch?"
            className="w-full placeholder:text-gray-400 placeholder:opacity-75  outline-none focus-none bg-transparent text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div>
            <img src={search} alt="search icon" />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-6">
        <p className="cursor-pointer">Sign in</p>
        <div className="cursor-pointer">
          <img src={hamburgerMenu} alt="hamburger icon for navbar" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
