import TvEventRow from './TvEventRow'

import * as Styled from 'components/styled/common/AccordionTable.styled'

const TvEventsTable = () => {
  return (
    <Styled.TvEventsTable>
      <Styled.Head>
        <Styled.Row>
          <Styled.Cell>Title</Styled.Cell>
          <Styled.Cell>Country</Styled.Cell>
          <Styled.Cell>Views</Styled.Cell>
          <Styled.Cell>Author</Styled.Cell>
          <Styled.Cell>Date</Styled.Cell>
        </Styled.Row>
      </Styled.Head>
      <Styled.Body>
        <TvEventRow />
      </Styled.Body>
    </Styled.TvEventsTable>
  )
}

export default TvEventsTable
