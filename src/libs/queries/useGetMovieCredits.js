import { useQuery } from 'react-query'
import { request } from '../instance'

const getCredits = (id) =>
  request({ url: `/movie/${id}/credits`, method: 'GET' })

const useGetMovieCredit = (id, onSuccess, onError) =>
  useQuery(['movie-credit', id], () => getCredits(id), {
    onError,
    onSuccess
  })

export default useGetMovieCredit
