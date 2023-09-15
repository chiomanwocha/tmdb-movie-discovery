import React from 'react'
import Sidebar from '../../components/movie-details/Sidebar'
import LoadingDetailsComp from '../../components/movie-details/LoadingDetailsComp'
import Logo from '../../components/common/Logo'
import DetailsComp from '../../components/movie-details/DetailsComp'
import { useParams } from 'react-router-dom'
import useGetMovieDetails from '../../libs/queries/useGetMovieDetails'
import useGetMovieCredit from '../../libs/queries/useGetMovieCredits'

const MovieDetails = () => {
  const { id } = useParams()
  const { data, isLoading } = useGetMovieDetails(id)
  const { data: creditData } = useGetMovieCredit(id)

  const stars = creditData?.cast?.filter(
    (item) => item?.known_for_department === 'Acting'
  )
  const directors = creditData?.crew?.filter(
    (item) => item?.known_for_department === 'Directing'
  )
  const writers = creditData?.crew?.filter(
    (item) => item?.known_for_department === 'Writing'
  )

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="block lg:hidden p-5 bg-rose sticky top-0 z-20">
        <Logo />
      </div>
      <div className="lg:flex-grow">
        {isLoading
          ? (
          <LoadingDetailsComp />
            )
          : (
          <DetailsComp
            data={data}
            stars={stars}
            directors={directors}
            writers={writers}
          />
            )}
      </div>
    </div>
  )
}

export default MovieDetails
