import styled from 'styled-components'

import { Table } from 'components/styled/common/Table.styled'

export const SubmittedTable = styled(Table)`
  tbody {
    height: calc(100vh - 4.5rem - 50px - 3rem);

    td:nth-last-of-type(2) {
      color: ${({ theme }) => theme.clrBlack50};
    }
  }

  tr {
    grid-template-columns: 3fr 1fr 0.5fr 0.1fr;
  }
`
