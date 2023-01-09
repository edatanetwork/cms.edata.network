import styled from 'styled-components'

import { Table } from 'components/styled/common/Table.styled'

export const TableWrapper = styled.div`
  & > div {
    display: flex;
    justify-content: center;
    padding-block: 20px;

    > button {
      height: 35px;
      padding: 0;
      padding-inline: 8px;
    }
  }

  :not(:last-of-type) {
    table {
      border-right: ${({ theme }) => theme.borderGray};
    }

    > div {
      border-right: ${({ theme }) => theme.borderGray};
    }
  }

  :nth-of-type(3) {
    table {
      border-right: 4px solid ${({ theme }) => theme.clrGray};
    }

    > div {
      border-right: 4px solid ${({ theme }) => theme.clrGray};
    }
  }
`

export const CategoryTable = styled(Table)`
  tbody {
    height: ${({ theme }) =>
      `calc(100vh - ${theme.topbarHeight} - ${theme.tableRowHeight} - 35px - 40px)`};
  }

  tr {
    grid-template-columns: 1fr auto;

    :hover {
      td {
        div {
          opacity: 1;
        }
      }
    }

    td {
      div {
        transition: opacity 150ms ease-in-out;
        opacity: 0;
      }
    }
  }
`
