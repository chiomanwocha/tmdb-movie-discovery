/* eslint-disable react/prop-types */
import React from 'react'
import play from '../../assets/svgs/play.svg'
import Ratings from '../common/ratings/Ratings'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const HeroSection = ({ data }) => {
  const swipeData = data?.results
  const backgroundImageUrl = (item) => {
    return `https://image.tmdb.org/t/p/original${
      item?.backdrop_path ?? item?.backdrop_path
    }`
  }
  return (
    <div className="h-[90vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {swipeData?.map((item) => (
          <SwiperSlide key={item?.id}>
            <div className="relative">
              <div className="h-[90vh] relative z-10 px-8 lg:px-24 text-white flex items-center">
                <div
                  className={
                    'absolute inset-0 bg-no-repeat bg-cover brightness-[30%]'
                  }
                  style={{
                    backgroundImage: `url(${backgroundImageUrl(item, 'hero-section')})`
                  }}
                ></div>
                <div className="md:max-w-[60vw] lg:max-w-[30vw] z-10 flex pt-10 flex-col gap-4">
                  <p className="text-[36px] lg:text-[48px] font-bold leading-8 lg:leading-[56px]">
                    {item?.original_title}
                  </p>
                  <Ratings imdbRating={item?.vote_average} />
                  <div>
                    <p className="font-sm">{item?.overview}</p>
                    <button className="flex items-center uppercase gap-2 bg-rose px-4 py-2 rounded-md hover:scale-105 mt-4">
                      <img src={play} alt="play icon" />
                      <p>Watch trailer</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroSection
