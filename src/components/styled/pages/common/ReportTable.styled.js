import styled from 'styled-components'

import { Table } from 'components/styled/common/Table.styled'

export const ReportTable = styled(Table)`
  tbody {
    height: calc(100vh - 4.5rem - 50px - 3rem);
  }

  tr {
    grid-template-columns: 3fr 0.3fr 1fr 0.5fr 0.3fr;
  }

  td:nth-of-type(2) {
    width: 18px;
  }
`
