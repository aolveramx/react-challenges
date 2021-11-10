import styled from 'styled-components'

export const Navbar = styled.nav`
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  display: flex;
  margin: 0 auto;
  padding: 20px;
  max-width: 600px;

  & a {
    margin-left: 16px;
    padding: 6px;
    text-decoration: none;
  }

  & a:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  & h1 {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const NavLinks = styled.div`
  margin-left: auto;
`
