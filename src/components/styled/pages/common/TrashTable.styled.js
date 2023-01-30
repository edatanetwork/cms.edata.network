import styled from 'styled-components'

import { Table } from 'components/styled/common/Table.styled'

export const TrashTable = styled(Table)`
  tbody {
    height: calc(100vh - 4.5rem - 50px - 3rem);

    td {
      :nth-last-of-type(2) {
        color: ${({ theme }) => theme.clrBlack50};
      }

      :has(button) {
        justify-content: end;
      }

      img {
        object-fit: contain;
      }
    }
  }

  tr {
    grid-template-columns: 3fr 2fr 1fr 1fr;
  }

  td {
    :nth-of-type(2) {
      justify-content: center;
    }
  }
`
