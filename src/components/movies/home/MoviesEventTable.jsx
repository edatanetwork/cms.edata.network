import MovieEventRow from './MovieEventRow'

import Icon, { IconTypes } from 'components/common/Icon'
import * as S from 'components/styled/common/AccordionTable.styled'

const MovieEventsTable = () => {
  return (
    <S.MovieEventsTable>
      <S.Head>
        <S.Row>
          <S.Cell>Title</S.Cell>
          <S.Cell>Genre</S.Cell>
          <S.Cell>Duration</S.Cell>
          <S.Cell>
            <S.Sort>
              Views
              <Icon type={IconTypes.arrows} />
            </S.Sort>
          </S.Cell>
          <S.Cell>
            <S.Sort>
              Author
              <Icon type={IconTypes.arrows} />
            </S.Sort>
          </S.Cell>
          <S.Cell>
            <S.Sort>
              Date
              <Icon type={IconTypes.arrows} />
            </S.Sort>
          </S.Cell>
        </S.Row>
      </S.Head>
      <S.Body>
        <MovieEventRow />
      </S.Body>
    </S.MovieEventsTable>
  )
}

export default MovieEventsTable
