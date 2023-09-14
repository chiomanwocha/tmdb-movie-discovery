/* eslint-disable valid-typeof */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Favorite from '../../home/Favorite'
import Ratings from '../ratings/Ratings'
import useGetMovieGenre from '../../../libs/queries/useGetMovieGenre'
import { useNavigate } from 'react-router-dom'
import { convertToUTC } from '../../../libs/convertToUTC'
import { getGenreName } from '../../../libs/getGenreName'

const MovieCard = ({
  id,
  name,
  releaseDate,
  originalLang,
  imageUrl,
  imdbRating,
  genreId
}) => {
  const { data, isLoading } = useGetMovieGenre()

  const [isLiked, setIsLiked] = useState(false)
  const navigate = useNavigate()

  return (
    <div
      className="max-[640px]:w-full w-fit lg:max-w-[250px] cursor-pointer hover:scale-105 ease-in-out transition duration-[120ms] hover:drop-shadow-xl"
      data-testid="movie-card"
      onClick={() => navigate(`/movies/${id}`)}
    >
      <div className="relative">
        <div className="h-[370px]">
          <img
            src={imageUrl}
            alt={`${name} movie poster`}
            className="w-full h-full object-cover overflow-hidden"
            data-testid="movie-poster"
          />
        </div>
        <div className="absolute top-0 p-4 flex justify-between w-full">
          <p className="bg-gray-900 px-2 py-1 rounded-2xl font-bold text-xs flex items-center">
            TV SERIES
          </p>
          <Favorite
            onClick={(e) => {
              e.stopPropagation()
              setIsLiked(!isLiked)
            }}
            isLiked={isLiked}
          />
        </div>
      </div>
      <div className="w-full flex flex-col lg:gap-3 mt-3">
        <p className="text-gray-400 font-bold text-xs uppercase">
          {originalLang ?? ''},{' '}
          <span data-testid="movie-release-date">
            {convertToUTC(releaseDate)}
          </span>
        </p>
        <p className="font-bold text-lg" data-testid="movie-title">
          {name}
        </p>
        {imdbRating
          ? (
          <Ratings className="justify-between" imdbRating={imdbRating} />
            )
          : null}
        {isLoading
          ? (
          <p className="h-2 bg-slate-200 rounded"></p>
            )
          : (
          <>
            {genreId
              ? (
              <p className="text-gray-400 font-bold text-xs">
                {genreId?.map((item, index) => (
                  <span key={item}>
                    {getGenreName(data, item) ?? 'Unknown'}
                    {genreId?.length - 1 !== index ? ', ' : null}
                  </span>
                ))}
              </p>
                )
              : null}
          </>
            )}
      </div>
    </div>
  )
}

export default MovieCard
