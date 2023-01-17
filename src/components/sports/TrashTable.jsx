import Icon, { IconTypes } from 'components/common/Icon'
import { TrashTable } from 'components/styled/pages/common/TrashTable.styled'
import { Head, Row, Body, Cell } from 'components/styled/common/Table.styled'

const Table = () => {
  return (
    <TrashTable>
      <Head>
        <Row>
          <Cell></Cell>
        </Row>
      </Head>
      <Body>
        <Row>
          <Cell>
            <Icon type={IconTypes.loading} />
          </Cell>
        </Row>
      </Body>
    </TrashTable>
  )
}

export default Table
