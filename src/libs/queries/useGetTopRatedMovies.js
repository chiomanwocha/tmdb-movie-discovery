import { useQuery } from 'react-query'
import { request } from '../instance'

const getTopRatedMovies = () =>
  request({ url: '/movie/top_rated', method: 'GET' })

const useGetTopRatedMovies = (onSuccess, onError) =>
  useQuery(['top-rated-movies'], () => getTopRatedMovies(), {
    onError,
    onSuccess
  })

export default useGetTopRatedMovies
