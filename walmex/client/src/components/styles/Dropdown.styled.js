import styled from 'styled-components'

export const StyledSelect = styled.select`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  border: 0;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`
