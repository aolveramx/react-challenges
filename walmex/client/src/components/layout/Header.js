import { Link } from 'react-router-dom'
import { Navbar, NavLinks } from '../styles/Header.styled'

const Header = () => {
  return (
    <Navbar>
      <h1>Walmex</h1>
      <NavLinks>
        <Link to='/'>Home</Link>
        <Link to='/users'>Users</Link>
      </NavLinks>
    </Navbar>
  )
}

export default Header
