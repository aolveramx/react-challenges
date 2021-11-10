import styled from 'styled-components'

export const Table = styled.table`
  border-spacing: 0px;
  width: 100%;

  & td,
  tr {
    border-top: 1px solid ${({ theme }) => theme.colors.secondary};
    padding: 0.75em;
    text-align: center;
    vertical-align: top;
  }

  & tr:hover {
    background-color: rgba(51, 102, 153, 0.5);
  }
`
