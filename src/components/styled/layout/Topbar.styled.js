import styled from 'styled-components'

export const Topbar = styled.div`
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${({ theme }) => theme.borderGray};
  padding-inline: 2rem;
`

export const Search = styled.div`
  width: 100%;
  max-width: 500px;
`

export const Buttons = styled.div`
  display: inherit;

  hr {
    width: 2px;
    border: 0;
    background-color: ${({ theme }) => theme.clrGray};
    margin: 0 0.5rem;
  }
`
