import React from 'react'
import facebook from '../../assets/svgs/icons/facebook.svg'
import instagram from '../../assets/svgs/icons/instagram.svg'
import twitter from '../../assets/svgs/icons/twitter.svg'
import youtube from '../../assets/svgs/icons/youtube.svg'

const Footer = () => {
  return (
    <div className="px-12 lg:px-24 mb-16 w-fit mx-auto my-0 flex flex-wrap flex-col gap-9">
      <div className='flex flex-wrap justify-center items-center gap-4 lg:gap-12'>
        {[
          { logo: facebook, link: '#' },
          { logo: instagram, link: '#' },
          { logo: twitter, link: '#' },
          { logo: youtube, link: '#' }
        ].map((icon) => (
          <div key={icon.logo} className='cursor-pointer hover:drop-shadow-md hover:scale-105'>
            <img src={icon.logo} alt={`${icon.logo} logo icon`} />
          </div>
        ))}
      </div>
      <div className='flex flex-wrap gap-4 md:gap-12 justify-center'>
        {[
          { title: 'Conditions of Use', link: '#' },
          { title: 'Privacy & Policy', link: '#' },
          { title: 'Press Room', link: '#' }
        ].map((item) => (
            <p key={item.title} className='font-bold cursor-pointer hover:scale-105'>{item.title}</p>
        ))}
      </div>
      <p className='text-center text-gray-500 font-bold'>© 2021 MovieBox by Adriana Eka Prayudha</p>
    </div>
  )
}

export default Footer
