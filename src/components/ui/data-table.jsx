import styled, { css } from 'styled-components'

import Icon, { IconTypes } from 'components/common/Icon'
import { CircleButton } from 'components/styled/common/Button.styled'

import Image from 'components/common/Image'
import Pagination from 'components/common/Pagination'

const TableContainer = styled.div`
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
`

const PaginationWrapper = styled.div`
  position: sticky;
  bottom: 0;
  background: #fff;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
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
  tr {
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.clrLightGray};
    }
  }
`
const TableRow = styled.tr`
  height: 50px;

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
  padding-inline: 1.5rem;
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

export const DataTable = props => {
  const {
    columns,
    rows,
    onDelete,
    onUpdate,
    pagination,
    loading,
    rowHasImage,
    style
  } = props
  return (
    <TableContainer style={style}>
      <Table>
        <TableHead>
          <TableRow>
            {rowHasImage && <TableCell />}
            {columns.map(column => (
              <TableCell key={column.name}>{column.name}</TableCell>
            ))}
            {(onDelete || onUpdate) && <TableCell />}
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell>
                <Icon type={IconTypes.loading} />
              </TableCell>
            </TableRow>
          ) : (
            rows?.map(row => (
              <TableRow key={row.id}>
                {rowHasImage && (
                  <TableCell>
                    <Image
                      src={row.post_images && row.post_images[0].preview}
                    />
                  </TableCell>
                )}
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
            ))
          )}
        </TableBody>
      </Table>
      {!loading && pagination && (
        <PaginationWrapper>
          <Pagination data={pagination} />
        </PaginationWrapper>
      )}
    </TableContainer>
  )
}
