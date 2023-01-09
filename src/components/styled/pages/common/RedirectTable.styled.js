import styled from 'styled-components'

import { Table } from 'components/styled/common/Table.styled'

export const RedirectTable = styled(Table)`
  tbody {
    height: calc(100vh - 4.5rem - 50px);
  }
  tr {
    grid-template-columns: 4fr 1fr 1fr;
  }
`
