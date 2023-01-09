import styled, { css } from 'styled-components'

// TABLE

//   /* SETTINGS -> USERS */
//   ${props =>
//     props.users &&
//     css`
//       tr {
//         grid-template-columns: 1.5fr 1fr 0.5fr 1fr 0.6fr 0.4fr;

//         td:nth-of-type(3),
//         td:nth-of-type(4) {
//           justify-content: center;
//         }
//       }
//     `}

export const Table = styled.table`
  display: block;
`

export const DesignTable = styled(Table)`
  tbody {
    height: calc(100vh - 11.5rem - 50px);
  }

  tr {
    grid-template-columns: 2fr 1fr 1fr 0.5fr 1fr 1fr;
  }

  td {
    :last-of-type,
    :nth-last-of-type(2) {
      color: ${({ theme }) => theme.clrBlack50};
    }

    :not(:first-of-type, :last-of-type) {
      justify-content: center;
    }

    :last-of-type {
      display: flex;
      justify-content: space-between;

      div {
        display: flex;
        gap: 0.5rem;
      }
    }
  }
`

export const Head = styled.thead`
  display: block;

  tr {
    td {
      text-transform: uppercase;
      font-size: 12px;
      color: ${({ theme }) => theme.clrBlack50};

      button {
        font-size: 12px;
        color: ${({ theme }) => theme.clrBlack50};

        svg {
          width: 12px;
        }
      }
    }
  }
`

export const Body = styled.tbody`
  position: relative;
  display: block;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: $clr-light-gray;
  }

  &::-webkit-scrollbar-thumb {
    background: #ceced8;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  tr {
    &:hover {
      background-color: ${({ theme }) => theme.clrLightGray};
    }
  }
`

export const Row = styled.tr`
  position: relative;
  display: grid;
  height: 50px;
  padding-inline: 2rem;
  border-bottom: ${({ theme }) => theme.borderGray};

  & > svg {
    align-self: center;
  }

  ${props =>
    props.active &&
    css`
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

  ${props =>
    props.seen &&
    css`
      td {
        /* color: rgba(0, 0, 0, 0.3) !important; */

        svg {
          path {
            fill: rgba(0, 0, 0, 0.3) !important;
          }
        }
      }
    `}
`

export const Cell = styled.td`
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  img {
    display: flex;
    border-radius: 3px;
    width: 38px;
    height: 28px;
  }
`

export const Category = styled.p`
  position: relative;
  font-size: 13px;

  display: flex;
  align-items: center;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    aspect-ratio: 1;
    border-radius: 50%;
  }

  &::before {
    right: -20px;
    width: 12px;
    background-color: ${props => props.color};
    opacity: 20%;
  }

  &::after {
    right: -17px;
    width: 6px;
    background-color: ${props => props.color};
  }
`
