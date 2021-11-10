import { useState, useEffect } from 'react'

const useFetch = url => {
  const [state, setState] = useState({
    isLoading: true,
    data: null,
    error: false,
  })

  useEffect(() => {
    const abortFetch = new AbortController()

    fetch(url, { signal: abortFetch.signal })
      .then(res => {
        if (!res.ok) {
          throw new Error(`Could not fetch from: ${url}`)
        }
        console.log(url)
        return res.json()
      })
      .then(data => {
        setState({
          isLoading: false,
          data,
          error: false,
        })
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('Prevent fetch from an unmounted component')
        }
        setState({
          isLoading: false,
          error: true,
        })
        console.log(error.message)
      })

    return () => abortFetch.abort()
  }, [url])

  return state
}

export default useFetch
