import { useEffect, useState } from 'react'

function useDebounce (value, delay) {
  const [debouncedValue, setDebouncedValue] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearInterval(interval)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
