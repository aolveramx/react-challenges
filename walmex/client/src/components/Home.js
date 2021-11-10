import { Fragment, useState } from 'react'
import useFetch from '../hooks/useFetch'

import { Table } from './styles/Home.styled'
import { StyledSelect } from './styles/Dropdown.styled'

const Home = () => {
  const shopingCart = [
    'carrot',
    'apple',
    'grapes',
    'cake',
    'tv',
    'cracker',
    'chips',
    'ham',
  ]

  const [productURL, setProductURL] = useState('')

  const select = shopingCart.map(add => add)

  const handleClick = e => {
    const url = `/users/age?product=${e.target.value}`
    setProductURL(url)
  }

  const { isLoading, data, error } = useFetch(productURL)
  console.log(data)

  return (
    <Fragment>
      {isLoading && <div>Loading...</div>}
      {error && <div>{console.log(error)}</div>}
      {data && (
        <Table>
          <thead>
            <tr>
              <th>Age</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, index) => {
              let key = Object.keys(d).pop()
              return (
                <tr key={index}>
                  <td>{key}</td>
                  <td>{d[key]}</td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      )}
      <StyledSelect onChange={e => handleClick(e)}>
        {select.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </StyledSelect>
    </Fragment>
  )
}

export default Home
