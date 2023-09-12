import { useQuery } from 'react-query'
import { request } from '../instance'

const getMovie = (id) =>
  request({ url: `/movie/${id}`, method: 'GET' })

const useGetMovieDetails = (id, onSuccess, onError) =>
  useQuery(['popular-movies', id], () => getMovie(id), {
    onError,
    onSuccess
  })

export default useGetMovieDetails
