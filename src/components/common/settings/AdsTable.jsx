import Icon, { IconTypes } from 'components/common/Icon'
import { Grid } from 'components/styled/common/Grid.styled'
import { AdTable } from 'components/styled/pages/common/AdTable.styled'
import { DomainTable } from 'components/styled/pages/common/AdTable.styled'
import { Head, Body, Row, Cell } from 'components/styled/common/Table.styled'

export default () => {
  return (
    <Grid columns='1fr 2fr'>
      <DomainTable>
        <Head>
          <Row>
            <Cell>Domain Name</Cell>
            <Cell>Ads</Cell>
          </Row>
        </Head>
        <Body>
          <Row>
            <Cell>
              <Icon type={IconTypes.loading} />
            </Cell>
          </Row>
        </Body>
      </DomainTable>
      <AdTable>
        <Head>
          <Row>
            <Cell>Zone</Cell>
            <Cell>Type</Cell>
            <Cell>Title</Cell>
            <Cell>Status</Cell>
          </Row>
        </Head>
        <Body>
          <Row>
            <Cell>
              <Icon type={IconTypes.loading} />
            </Cell>
          </Row>
        </Body>
      </AdTable>
    </Grid>
  )
}
