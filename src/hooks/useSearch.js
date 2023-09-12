import useDebounce from './useDebounce'

function useSearch (searchTerm) {
  const debouncedValue = useDebounce(searchTerm, 50)
  return { debouncedValue }
}
export default useSearch
