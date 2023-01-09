import styled from 'styled-components'

import { Table } from 'components/styled/common/Table.styled'

export const DomainTable = styled(Table)`
  tbody {
    height: calc(100vh - 4.5rem - 50px);

    td {
      :nth-of-type(4),
      :nth-of-type(5) {
        color: ${({ theme }) => theme.clrBlack50};
      }
    }
  }

  tr {
    grid-template-columns: 1.5fr 0.5fr 0.5fr 0.7fr 1fr 0.3fr;
  }

  td {
    :nth-of-type(2) {
      justify-content: center;
    }

    :nth-of-type(3) {
      justify-content: center;
    }

    :nth-of-type(4) {
      justify-content: end;
    }

    :nth-of-type(5) {
      justify-content: center;
    }
  }
`
