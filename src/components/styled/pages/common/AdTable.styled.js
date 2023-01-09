import styled from 'styled-components'

import { Table } from 'components/styled/common/Table.styled'

export const AdTable = styled(Table)`
  tbody {
    height: calc(100vh - 4.5rem - 50px);
  }

  tr {
    grid-template-columns: 2fr 2fr 0.6fr 0.5fr;
  }
`

export const DomainTable = styled(Table)`
  border-right: ${({ theme }) => theme.borderGray};

  tbody {
    height: calc(100vh - 4.5rem - 50px);
  }

  tr {
    grid-template-columns: 2fr 1fr;
  }

  td:last-of-type {
    justify-content: center;
  }
`
