const TableUsers = ({ users }) => {
  return (
    <>
      {users.map((user, index) => (
        <tr key={index}>
          <td>{user.username}</td>
          <td>{user.age}</td>
        </tr>
      ))}
    </>
  )
}

export default TableUsers
