import styled, { css } from 'styled-components'

import { formatDate } from 'utils/formatDate'

import Icon, { IconTypes } from 'components/common/Icon'
import { CircleButton } from 'components/styled/common/Button.styled'

const TableContainer = styled.div`
  height: 600px;
  overflow-y: auto;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  /* display: block;

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
  } */
`

const TableHead = styled.thead`
  td {
    top: 0;
    position: sticky;
    background-color: #fff;
    z-index: 1;
    text-transform: uppercase;
    font-size: 12px;
    filter: drop-shadow(0 2px 0px rgb(0 0 0 / 0.1));
    color: ${({ theme }) => theme.clrBlack50};

    button {
      font-size: 12px;
      color: ${({ theme }) => theme.clrBlack50};

      svg {
        width: 12px;
      }
    }
  }
`

const TableBody = styled.tbody`
  position: relative;
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
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.clrLightGray};
    }
  }
`
const TableRow = styled.tr`
  position: relative;
  height: 50px;
  padding-inline: 2rem;

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
`
const TableCell = styled.td`
  font-size: 13px;
  padding-inline: 1rem;
  border-bottom: ${({ theme }) => theme.borderGray};

  img {
    display: flex;
    border-radius: 3px;
    width: 38px;
    height: 28px;
  }

  button {
    display: inline-block;
    width: 32px;
    height: 32px;

    &:first-of-type {
      margin-right: 0.5rem;
    }
  }
`

const DataTable = ({ columns, rows, onDelete, onUpdate }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell key={column.name}>{column.name}</TableCell>
            ))}
            {(onDelete || onUpdate) && <TableCell />}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              {columns.map(({ name, field, valueGetter }) => (
                <TableCell key={name}>
                  {row[field] ?? (valueGetter ? valueGetter(row) : '')}
                </TableCell>
              ))}
              {(onDelete || onUpdate) && (
                <TableCell>
                  {onUpdate && (
                    <CircleButton onClick={() => onUpdate(row)}>
                      <Icon type={IconTypes.edit} />
                    </CircleButton>
                  )}
                  {onDelete && (
                    <CircleButton onClick={() => onDelete(row)}>
                      <Icon type={IconTypes.delete} />
                    </CircleButton>
                  )}
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

import { useGetSearchedQuery } from 'app/services/searches'

const TestPage = () => {
  const { data } = useGetSearchedQuery()

  const columns = [
    { name: 'searched', field: 'search' },
    { name: 'result', field: 'count' },
    {
      name: 'domain',
      valueGetter: row => row.domain.name
    },
    { name: 'date', valueGetter: row => formatDate(row.created_at) }
  ]

  if (!data) return

  return (
    <DataTable
      columns={columns}
      rows={data.searched}
      onUpdate={row => console.log(row)}
      onDelete={row => console.log(row)}
    />
  )
}

export default TestPage
