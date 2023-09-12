import React from 'react'
import Logo from '../common/Logo'
import home from '../../assets/svgs/icons/Home.svg'
import movie from '../../assets/svgs/icons/Movie Projector.svg'
import series from '../../assets/svgs/icons/TV Show.svg'
import upcoming from '../../assets/svgs/icons/Calendar.svg'
import logout from '../../assets/svgs/icons/Logout.svg'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate()

  return (
    <div className="sticky top-0 left-0 text-black min-w-[20vw] lg:max-w-[17vw] h-[100vh] border-y-[1px] py-8 border-r-[1px] border-gray-400 rounded-r-[45px]">
      <div className="px-5">
        <Logo dark />
      </div>
      <ul className="flex flex-col gap-2 mt-14">
        {[
          { title: 'Home', link: '/', icon: home },
          { title: 'Movies', link: '/movie', icon: movie },
          { title: 'TV Series', link: '/', icon: series },
          { title: 'Upcoming', link: '/', icon: upcoming }
        ].map((item) => (
          <li
            key={item?.title}
            className={`py-4 px-10 cursor-pointer hover:text-rose hover:bg-lightRose ${
              item?.title === 'Movies'
                ? 'text-rose bg-lightRose border-r-[6px] border-rose'
                : 'text-gray-600'
            }`}
            onClick={() => navigate(item?.link)}
          >
            <div className="flex gap-4 items-center">
              <img src={item?.icon} alt={`${item?.title} icon`} />
              <p className="font-semibold text-[20px]">{item?.title}</p>
            </div>
          </li>
        ))}
        <div className="mx-7 mt-14 mb-10 px-4 pt-10 pb-4 rounded-[20px] bg-lightestRose border-rose border-[1px]">
          <p className="text-['rgba(248, 231, 235, 0.40)'] font-semibold mb-2">
            Play movie quizes and earn free tickets
          </p>
          <p className="text-[12px] text-gray-600 mb-2">
            50k people are playing now
          </p>
          <div className="flex justify-center">
            <button className="rounded-[30px] bg-lighterRose text-xs text-rose py-2 px-4">
              Start playing
            </button>
          </div>
        </div>
        <li className="py-4 px-10 cursor-pointer hover:text-rose text-gray-600 overflow-hidden">
          <div className="flex gap-4 items-center">
            <img src={logout} alt="logout icon" />
            <p className="font-semibold text-[20px]">Log out</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
