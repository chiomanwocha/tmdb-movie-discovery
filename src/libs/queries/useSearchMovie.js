import { useQuery } from 'react-query'
import { request } from '../instance'

const searchMovie = (title) => {
  return request({ url: `/search/movie${title ? `?query=${encodeURIComponent(title)}` : ''}`, method: 'GET' })
}

const useSearchMovie = (title, onSuccess, onError) =>
  useQuery(['search-result', title], () => searchMovie(title), {
    onError,
    onSuccess
  })

export default useSearchMovie
