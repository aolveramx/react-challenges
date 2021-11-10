import useFetch from "../hooks/useFetch"

const GitHubUsers = () => {

  const url = `https://breakingbadapi.com/api/quote?author=Saul+Goodman`
  const { data, loading, error } = useFetch(url)

  return (
    <div>
      <h1>
        Breaking Bad Quotes
      </h1>
      <hr />
      <article>
        { loading && <div>Loading ...</div> }
        { error && <div>Error: { error } </div> }
        {
          data && (
            data.map(q => (
              <div key={ q.quote_id }>
                <h1>{ q.author }</h1>
                  <p>{ q.quote }</p>
              </div>
            ))
          )
        }
      </article>
    </div>
  )
}

export default GitHubUsers
