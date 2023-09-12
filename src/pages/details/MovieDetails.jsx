import React from 'react'
import Sidebar from '../../components/movie-details/Sidebar'
import LoadingDetailsComp from '../../components/movie-details/LoadingDetailsComp'
import Logo from '../../components/common/Logo'
import DetailsComp from '../../components/movie-details/DetailsComp'
import { useParams } from 'react-router-dom'
import useGetMovieDetails from '../../libs/queries/useGetMovieDetails'

const MovieDetails = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetMovieDetails(id)

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="block lg:hidden p-5 bg-rose sticky top-0 z-20">
        <Logo />
      </div>
      <div className="lg:flex-grow">
        {isLoading ? <LoadingDetailsComp /> : <DetailsComp data={data} />}
      </div>
    </div>
  )
}

export default MovieDetails
