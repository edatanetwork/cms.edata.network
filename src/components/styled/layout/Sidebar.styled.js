import styled from 'styled-components'

export const Sidebar = styled.div`
  border-left: 4px solid ${({ theme }) => theme.clrGray};
  width: 450px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.5rem;
  border-bottom: ${({ theme }) => theme.borderGray};
  padding-inline: 2rem;
`

export const Title = styled.p`
  font-size: 14px;
  text-transform: uppercase;
`

export const Body = styled.div`
  padding: 2rem;
  height: calc(100vh - 4.5rem);
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: $clr-light-gray;
  }

  ::-webkit-scrollbar-thumb {
    background: #ceced8;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`
