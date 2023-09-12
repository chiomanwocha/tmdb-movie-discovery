/* eslint-disable valid-typeof */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import Favorite from '../../home/Favorite'
import Ratings from '../ratings/Ratings'
import useGetMovieGenre from '../../../libs/queries/useGetMovieGenre'
import { useNavigate } from 'react-router-dom'

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

  const getGenreName = (id) => {
    const result = data?.genres?.find((item) => item?.id === id)
    if (result) {
      return result?.name
    }
  }

  const [isLiked, setIsLiked] = useState(false)
  const navigate = useNavigate()

  return (
    <div
      className="max-[640px]:w-full w-fit lg:max-w-[250px] cursor-pointer hover:scale-105 hover:drop-shadow-xl"
      data-testid="movie-card"
      onClick={() => navigate(`/movies/${id}`)}
    >
      <div className="relative">
        <div className="h-[370px]" data-testid="movie-poster">
          <img
            src={`${
              imageUrl
                ? `https://image.tmdb.org/t/p/original/${imageUrl}`
                : 'https://static.wixstatic.com/media/fc7570_ae9913d461894a7ebb7fc420d828ab83~mv2.png/v1/crop/x_420,y_0,w_1080,h_1080/fill/w_784,h_784,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.png'
            }`}
            alt={`${name} movie poster`}
            className="w-full h-full object-cover overflow-hidden"
          />
        </div>
        <div className="absolute top-0 p-4 flex justify-end w-full">
          {/* <p className="bg-gray-900 px-2 py-1 rounded-2xl font-bold text-xs flex items-center">
            TV SERIES
          </p> */}
          <Favorite onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked) }} isLiked={isLiked} />
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 mt-3">
        <p
          className="text-gray-400 font-bold text-xs uppercase"
        >
          {originalLang ?? ''}, <span data-testid="movie-release-date">{releaseDate}</span>
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
                    {getGenreName(item)}
                    {genreId.length - 1 !== index &&
                    typeof getGenreName(item) === 'string'
                      ? '. '
                      : ''}
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
