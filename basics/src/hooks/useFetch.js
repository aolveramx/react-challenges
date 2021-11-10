import { useState, useEffect } from 'react'

const useFetch = url => {
  
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: false,
  })

  useEffect(() => {

    const abortCont = new AbortController()

    fetch(url, { signal: abortCont.signal })
      .then(res => {
        // console.log(res) 
        if (!res.ok) {
          throw Error('could not fetch the data for that resource')
        }
        return res.json()
      })
      .then(data => {
        setState({
          data,
          loading: false,
          error: false,
        })
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          setState({
            data: null,
            loading: false,
            error: error.message,
          })
        }
      })

    return () => abortCont.abort()

  }, [url])

  return state

}

export default useFetch
