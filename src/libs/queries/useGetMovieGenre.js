import { useQuery } from 'react-query'
import { request } from '../instance'

const getGenre = () =>
  request({ url: '/genre/movie/list', method: 'GET' })

const useGetMovieGenre = (onSuccess, onError) =>
  useQuery(['movie-genre'], () => getGenre(), {
    onError,
    onSuccess
  })

export default useGetMovieGenre
