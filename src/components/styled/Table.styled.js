import styled, { css } from 'styled-components'

export const Cell = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap};
  opacity: ${({ opacity }) => opacity};
  justify-content: ${({ justify }) => justify};

  :first-of-type {
    img {
      display: flex;
      border-radius: 3px;
      width: 38px;
      height: 28px;
      object-fit: contain;
    }
  }

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

  ${props =>
    props.active &&
    css`
      position: relative;
      background-color: #f9f9f9;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        height: 60%;
        width: 3px;
        background-color: ${({ theme }) => theme.clrOrange};
      }
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
