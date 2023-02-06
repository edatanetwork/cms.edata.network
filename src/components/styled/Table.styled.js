import styled, { css } from 'styled-components'

export const Cell = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap};
  opacity: ${({ opacity }) => opacity};

  & > svg {
    width: 28px;
    height: auto;
  }
`

export const Row = styled.div`
  height: 50px;
  display: grid;
  grid-template-columns: ${({ columns }) => columns};
  border-bottom: ${({ theme }) => theme.borderGray};
  padding-left: 2rem;

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
    `}
`

export const Body = styled.div`
  height: ${({ theme }) =>
    `calc(100vh - ${theme.topbarHeight} - ${theme.tableRowHeight} - ${theme.paginationHeight})`};
  overflow-y: scroll;
  font-size: 13px;

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #ededed;
  }

  ::-webkit-scrollbar-thumb {
    background: #ceced8;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  ${Row} {
    padding-right: 2rem;
  }
`

export const Head = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.clrBlack50};

  ${Row} {
    padding-right: calc(2rem + 7px);
  }
`

export const Table = styled.div``
