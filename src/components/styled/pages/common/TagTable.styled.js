import styled from 'styled-components'

import { Table } from 'components/styled/common/Table.styled'

export const TagTable = styled(Table)`
  tbody {
    height: calc(100vh - 4.5rem - 50px - 50px);
  }

  tr {
    grid-template-columns: 5fr 2fr 1.5fr;
  }

  td:nth-of-type(2) {
    justify-content: end;
  }

  td:nth-of-type(3) {
    justify-content: end;
  }
`
