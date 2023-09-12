import React from 'react'
import construction from '../assets/svgs/construnction.svg'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center flex-col items-center h-[100vh] bg-lightRose">
      <div>
        <img src={construction} alt="under construction svg" />
      </div>
      <p className="text-[32px] text-rose font-bold">
        Oops! this page can not be found
      </p>
      <p
        className="text-rose text-[20px] font-semibold hover:underline cursor-pointer"
        onClick={() => navigate('/')}
      >
        Go to home page
      </p>
    </div>
  )
}

export default NotFound
