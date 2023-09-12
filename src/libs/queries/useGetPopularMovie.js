import { useQuery } from 'react-query'
import { request } from '../instance'

const getMovie = () =>
  request({ url: '/movie/popular', method: 'GET' })

const useGetPopularMovies = (onSuccess, onError) =>
  useQuery(['popular-movies'], () => getMovie(), {
    onError,
    onSuccess
  })

export default useGetPopularMovies
