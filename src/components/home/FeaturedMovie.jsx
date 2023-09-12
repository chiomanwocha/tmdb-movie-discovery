/* eslint-disable react/prop-types */
import React from 'react'
import rightIcon from '../../assets/svgs/Chevron-right.svg'
import MovieCard from '../common/cards/MovieCard'
import useGetTopRatedMovies from '../../libs/queries/useGetTopRatedMovies'
import LoadingMovieCard from '../common/cards/LoadingMovieCard'
import noResult from '../../assets/svgs/icons/not-found.svg'

const FeaturedMovie = ({ searchResult, isSearching, searchQuery }) => {
  const { data, isLoading } = useGetTopRatedMovies()
  const results = data?.results.filter((_item, index) => index >= 10)

  return (
    <div className="px-12 lg:px-24 mt-16 mb-36">
      <div className="flex flex-wrap justify-between items-center mb-12">
        <p className="text-[36px] font-bold">
          {searchQuery?.length > 0 ? 'Search Results' : 'Featured Movie'}
        </p>
        <button className="flex items-center hover:scale-105">
          <p className="text-[18px] text-rose">See more</p>
          <img src={rightIcon} alt="right icon" />
        </button>
      </div>
      <div className="grid max-[640px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-12 lg:gap-x-20 lg:gap-y-32">
        {!(isLoading || isSearching)
          ? (
          <>
            {searchQuery?.length > 0
              ? (
              <>
                {searchResult?.results?.length > 0
                  ? (
                  <>
                    {searchResult?.results?.map((item) => (
                      <MovieCard
                        key={item?.id}
                        id={item?.id}
                        name={item?.title || item?.original_title}
                        releaseDate={item?.release_date}
                        originalLang={item?.original_language}
                        imageUrl={item?.poster_path || item?.backdrop_path}
                        imdbRating={item?.vote_average}
                        genreId={item?.genre_ids}
                      />
                    ))}
                  </>
                    )
                  : (
                  <div className="flex justify-center text-center col-span-4 font-semibold text-[20px] my-20 text-rose">
                    <div className="">
                      <div className="w-fit mx-auto my-0">
                        <img src={noResult} alt="not found icon" />
                      </div>
                      <p>No results</p>
                    </div>
                  </div>
                    )}
              </>
                )
              : (
              <>
                {results?.map((item) => (
                  <MovieCard
                    key={item?.id}
                    id={item?.id}
                    name={item?.title || item?.original_title}
                    releaseDate={item?.release_date}
                    originalLang={item?.original_language}
                    imageUrl={item?.poster_path}
                    imdbRating={item?.vote_average}
                    genreId={item?.genre_ids}
                  />
                ))}
              </>
                )}
          </>
            )
          : (
          <>
            {[...Array(10)].map((_item, index) => (
              <LoadingMovieCard key={index} />
            ))}
          </>
            )}
      </div>
    </div>
  )
}

export default FeaturedMovie
