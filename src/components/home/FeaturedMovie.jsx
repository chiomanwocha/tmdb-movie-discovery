/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import rightIcon from '../../assets/svgs/Chevron-right.svg'
import MovieCard from '../common/cards/MovieCard'
import useGetTopRatedMovies from '../../libs/queries/useGetTopRatedMovies'
import LoadingMovieCard from '../common/cards/LoadingMovieCard'
import noResult from '../../assets/svgs/icons/not-found.svg'
import { backgroundImageUrl } from '../../libs/getBackgroundImageUrl'

function FeaturedMovie ({ searchResult, isSearching, searchQuery }) {
  const { data, isLoading } = useGetTopRatedMovies()
  const [showMore, setShowMore] = useState(false)

  const renderMovieCards = (movies) =>
    movies.map((item) => (
      <MovieCard
        key={item?.id}
        id={item?.id}
        name={item?.title || item?.original_title}
        releaseDate={item?.release_date}
        originalLang={item?.original_language}
        imageUrl={backgroundImageUrl(item, 'card')}
        imdbRating={item?.vote_average}
        genreId={item?.genre_ids}
      />
    ))

  const renderNoResults = () => (
    <div className="flex justify-center text-center col-span-4 font-semibold text-[20px] my-20 text-rose">
      <div className="">
        <div className="w-fit mx-auto my-0">
          <img src={noResult} alt="not found icon" />
        </div>
        <p>No results</p>
      </div>
    </div>
  )

  return (
    <div className="px-12 lg:px-24 mt-16 mb-36">
      <div className="flex flex-wrap justify-between items-center mb-12">
        <p className="text-[36px] font-bold">
          {searchQuery?.length > 0 ? 'Search Results' : 'Featured Movie'}
        </p>
        <button className="flex items-center hover:scale-105">
          <p
            className="text-[18px] text-rose cursor-pointer"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? 'See less' : 'See more'}
          </p>
          <img
            src={rightIcon}
            alt="right icon"
            className={`${showMore ? 'rotate-180' : ''} `}
          />
        </button>
      </div>
      <div className="grid max-[640px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-12 lg:gap-x-20 lg:gap-y-32">
        {isLoading || isSearching
          ? (
              [...Array(10)].map((_item, index) => <LoadingMovieCard key={index} />)
            )
          : (
          <>
            {searchQuery?.length > 0
              ? (
                  searchResult?.results?.length > 0
                    ? (
                        showMore
                          ? (
                              renderMovieCards(searchResult?.results)
                            )
                          : (
                              renderMovieCards(searchResult?.results.slice(0, 10))
                            )
                      )
                    : (
                        renderNoResults()
                      )
                )
              : showMore
                ? (
                    renderMovieCards(data?.results)
                  )
                : (
                    renderMovieCards(data?.results.slice(0, 10))
                  )}
          </>
            )}
      </div>
    </div>
  )
}

export default FeaturedMovie
