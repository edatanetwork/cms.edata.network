import styled from 'styled-components'

import { Table } from 'components/styled/common/Table.styled'

export const TableWrapper = styled.div`
  & > button {
    height: 35px;
    padding: 0;
    padding-inline: 8px;
    margin-block: 20px;
    margin-inline: auto;
  }

  :not(:last-of-type) {
    table {
      border-right: ${({ theme }) => theme.borderGray};
    }
  }
`

export const CategoryTable = styled(Table)`
  thead {
    td:last-of-type {
      justify-content: end;
    }
  }

  tbody {
    height: calc(100vh - 4.5rem - 50px - 35px - 40px);

    td:nth-last-of-type(2) {
      color: ${({ theme }) => theme.clrBlack50};
      justify-content: end;
    }
  }

  tr {
    grid-template-columns: 2fr 1fr 1.5fr;
  }
`
