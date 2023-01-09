import { useNavigate } from 'react-router-dom'

import Icon, { IconTypes } from 'components/common/Icon'
import EditDeleteButtons from 'components/common/EditDeleteButtons'
import { RoundButton } from 'components/styled/common/Button.styled'
import {
  TableWrapper,
  CategoryTable
} from 'components/styled/pages/sports/CategoryTable.styled'
import { Head, Body, Row, Cell } from 'components/styled/common/Table.styled'

const TeamsTable = () => {
  const navigate = useNavigate()

  return (
    <TableWrapper>
      <CategoryTable>
        <Head>
          <Row>
            <Cell>Teams</Cell>
          </Row>
        </Head>
        <Body>
          <Row>
            <Cell>
              <Icon type={IconTypes.loading} />
            </Cell>
          </Row>
          <Row>
            <Cell>KF Tirana</Cell>
            <Cell>
              <EditDeleteButtons />
            </Cell>
          </Row>
        </Body>
      </CategoryTable>
      <div>
        <RoundButton
          onClick={() => navigate('/sports/settings/categories/teams')}
        >
          <Icon type={IconTypes.plusCircle} />
          Add new
        </RoundButton>
      </div>
    </TableWrapper>
  )
}

export default TeamsTable
