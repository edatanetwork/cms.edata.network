import MovieEventRow from './MovieEventRow'

import * as Styled from 'components/styled/common/AccordionTable.styled'

const MovieEventsTable = () => {
  return (
    <Styled.MovieEventsTable>
      <Styled.Head>
        <Styled.Row>
          <Styled.Cell>Title</Styled.Cell>
          <Styled.Cell>Genre</Styled.Cell>
          <Styled.Cell>Duration</Styled.Cell>
          <Styled.Cell>Views</Styled.Cell>
          <Styled.Cell>Author</Styled.Cell>
          <Styled.Cell>Date</Styled.Cell>
        </Styled.Row>
      </Styled.Head>
      <Styled.Body>
        <MovieEventRow />
      </Styled.Body>
    </Styled.MovieEventsTable>
  )
}

export default MovieEventsTable
