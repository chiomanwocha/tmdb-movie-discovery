/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import play from '../../assets/svgs/icons/play.svg'
import star from '../../assets/svgs/icons/Star.svg'
import latestMovie from '../../assets/images/Group 52.png'
import { convertToUTC } from '../../libs/convertToUTC'
import { backgroundImageUrl } from '../../libs/getBackgroundImageUrl'
import useComponentData from './useComponentData'

const DetailsComp = ({ data, stars, directors, writers }) => {
  const { displayItems, creditsData, buttonObj } = useComponentData(
    directors,
    writers,
    stars
  )
  const [showMore, setShowMore] = useState(false)
  return (
    <div className="text-black p-9 overflow-y-scroll lg:max-h-[100vh]">
      <div className="relative h-[50vh] w-full rounded-xl overflow-hidden">
        <div
          className="bg-cover h-full w-full absolute top-0 left-0 z-0 brightness-[50%] transition-transform hover:brightness-[70%]"
          style={{
            backgroundImage: `url(${backgroundImageUrl(
              data,
              'movie-details'
            )})`
          }}
        ></div>
        <div className="z-10 flex h-full flex-col justify-center items-center text-center text-white relative float">
          <div className="bg-transparentWhite hover:bg-thickTransparentWhite p-7 w-fit cursor-pointer rounded-[50%]">
            <img src={play} alt="play video icon" />
          </div>
          <p className="text-[25px]">Watch Trailer</p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-8 justify-between gap-10 lg:gap-7">
        <div className="lg:w-[50vw]">
          <div className="flex gap-4 flex-wrap">
            <p className="text-[23px]">
              <span data-testid="movie-title">{data?.title}</span> •{' '}
              <span data-testid="movie-release-date">
                {convertToUTC(data?.release_date)}
              </span>{' '}
              {data?.adult ? <span>• PG-13</span> : null} •{' '}
              <span data-testid="movie-runtime">{data?.runtime}</span>
            </p>
            <div className="flex gap-2 flex-wrap">
              {data?.genres?.map((genre) => (
                <div
                  key={genre?.id}
                  className="text-rose border w-fit border-lightRose flex items-center text-sm px-4 rounded-[15px]"
                >
                  {genre?.name}
                </div>
              ))}
            </div>
          </div>
          <div className="lg:hidden flex my-6">
            <div>
              <img src={star} alt="start icon" />
            </div>
            <div>
              <p className="text-[20px] text-gray-600 font-[500]">
                <span className="text-[#E8E8E8] text-[25px]">
                  {data?.vote_average?.toFixed(2)}{' '}
                </span>
                | {data?.vote_count?.toLocaleString()}
              </p>
            </div>
          </div>
          <p
            className="mt-6 text-[20px] text-gray-300 mb-9"
            data-testid="movie-overview"
          >
            {data?.overview}
          </p>
          <div className="text-[20px] flex flex-col gap-7 mb-7">
            {creditsData?.map((item) => (
              <p key={item?.title}>
                {item?.title} : {''}
                {item?.title !== 'Stars'
                  ? (
                  <>{displayItems(item?.value)}</>
                    )
                  : (
                  <>
                    {showMore
                      ? (
                      <>
                        {displayItems(item?.value, true, setShowMore, showMore)}
                      </>
                        )
                      : (
                      <>
                        {displayItems(
                          item?.value?.filter((_item, index) => index <= 2),
                          true,
                          setShowMore,
                          showMore
                        )}
                      </>
                        )}
                  </>
                    )}
              </p>
            ))}
          </div>
          <div className="flex text-[20px]">
            <p className="p-3 rounded-[10px] text-white bg-rose relative z-10 cursor-pointer">
              Top rated movie #65
            </p>
            <p className="p-3 pl-10 rounded-[10px] border-[1px] flex-grow ml-[-10px]">
              Awards 9 nominations
            </p>
          </div>
        </div>
        <div className="lg:w-[45]">
          <div className="justify-end mb-6 hidden lg:flex">
            <div>
              <img src={star} alt="start icon" />
            </div>
            <div>
              <p className="text-[20px] text-gray-600 font-[500]">
                <span className="text-[#E8E8E8] text-[25px]">
                  {data?.vote_average?.toFixed(2)}{' '}
                </span>
                | {data?.vote_count?.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mb-8">
            {buttonObj?.map((item) => (
              <div
                key={item?.title}
                className={`${
                  item?.title === 'See Showtimes'
                    ? 'text-white bg-rose border-transparent'
                    : 'text-[#333] bg-lightRose border-rose'
                } border-[1px] cursor-pointer hover:scale-105 rounded-[10px] py-4 w-full flex justify-center items-center gap-2 text-[20px] font-[500]`}
              >
                <img src={item?.icon} alt={`${item?.title} icon`} />
                <p>{item?.title}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <img src={latestMovie} alt="list of latest movie" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailsComp
