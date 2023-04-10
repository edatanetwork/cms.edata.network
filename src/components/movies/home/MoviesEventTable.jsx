import { useGetFilmsQuery } from 'app/services/movie/films'

import MovieEventRow from 'components/movies/home/MovieEventRow'
import Pagination from 'components/common/Pagination'
import Icon, { IconTypes } from 'components/common/Icon'
import * as S from 'components/styled/common/AccordionTable.styled'

const MovieEventsTable = () => {
  const { data, isLoading, isFetching } = useGetFilmsQuery()

  if (!isLoading) {
    const movieNames = data.movies.map(item => item.name)
    console.log(movieNames)
  }

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
        {isLoading || isFetching ? (
          <S.Row>
            <Icon type={IconTypes.loading} />
          </S.Row>
        ) : (
          data?.movies.map(movie => <MovieEventRow key={movie.id} {...movie} />)
        )}
      </S.Body>
      {!isLoading && <Pagination data={data.pagination} />}
    </S.MovieEventsTable>
  )
}

export default MovieEventsTable
