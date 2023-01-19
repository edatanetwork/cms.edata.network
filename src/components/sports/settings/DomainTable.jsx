import Icon, { IconTypes } from 'components/common/Icon'
import Grid from 'components/styled/common/Grid.styled'
import { DomainTable } from 'components/styled/pages/common/DomainTable.styled'
import { Head, Body, Row, Cell } from 'components/styled/common/Table.styled'

const Domains = () => {
  return (
    <Grid>
      <DomainTable>
        <Head>
          <Row>
            <Cell>Domain Name</Cell>
            <Cell>Posts</Cell>
            <Cell>Downloads</Cell>
            <Cell>Url</Cell>
            <Cell>Created At</Cell>
          </Row>
        </Head>
        <Body>
          <Row>
            <Cell>
              <Icon type={IconTypes.loading} />
            </Cell>
          </Row>
          <Row>
            <Cell>
              <Icon type={IconTypes.loading} />
            </Cell>
          </Row>
        </Body>
      </DomainTable>
    </Grid>
  )
}

export default Domains
