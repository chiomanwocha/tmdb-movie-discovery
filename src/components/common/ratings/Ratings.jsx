/* eslint-disable react/prop-types */
import React from 'react'
import imdbRatingIcon from '../../../assets/svgs/imdb-rating.svg'
import rottenTomatoes from '../../../assets/svgs/rotten-tomatoes.svg'

const Ratings = ({ imdbRating, className }) => {
  function roundToTwoDecimalPlaces (number) {
    const roundedNumber = Math.round(number * 100) / 10
    return roundedNumber % 1 === 0 ? Math.round(roundedNumber) : roundedNumber
  }
  return (
    <div className={`flex flex-wrap w-full gap-2 lg:gap-8 text-xs ${className}`}>
      <div className="flex gap-2 flex-wrap">
        <img src={imdbRatingIcon} alt="imdb movie rating icon" />
        <p>{roundToTwoDecimalPlaces(imdbRating)}/100</p>
      </div>
      <div className="flex gap-2 flex-wrap">
        <img src={rottenTomatoes} alt="rotten tomatoes rating icon" />
        <p>97%</p>
      </div>
    </div>
  )
}

export default Ratings
