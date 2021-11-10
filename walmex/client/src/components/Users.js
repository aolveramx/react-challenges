import useFetch from '../hooks/useFetch'
import TableUsers from './TableUsers'

import { Table } from './styles/Home.styled'

const Users = () => {
  const url = `/users`
  const { isLoading, data: users, error } = useFetch(url)

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{console.log(error)}</div>}
      {users && (
        <Table>
          <thead>
            <tr>
              <th>User</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <TableUsers users={users} />
          </tbody>
        </Table>
      )}
    </div>
  )
}

export default Users
