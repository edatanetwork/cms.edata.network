import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  useGetMovieGenresQuery,
  useDeleteMovieGenreMutation
} from 'app/services/movie/genre'
import { setCurrent } from 'features/currentSlice'
import { throwToast, removeConfirmation } from 'utils/throwToast'

import Icon, { IconTypes } from 'components/common/Icon'
import EditDeleteButtons from 'components/common/EditDeleteButtons'
import { RoundButton } from 'components/styled/common/Button.styled'
import {
  TableWrapper,
  CategoryTable
} from 'components/styled/pages/tv/CategoryTable.styled'
import { Head, Body, Row, Cell } from 'components/styled/common/Table.styled'

const GenreTable = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const current = useSelector(state => state.current.current)

  const { data, isLoading } = useGetMovieGenresQuery()
  const [deleteGenre] = useDeleteMovieGenreMutation()

  const handleDelete = id => {
    const promise = deleteGenre(id).unwrap()
    throwToast(promise, 'Deleting genre!', 'Genre deleted!')
  }

  return (
    <TableWrapper>
      <CategoryTable>
        <Head>
          <Row>
            <Cell>Genre</Cell>
          </Row>
        </Head>
        <Body>
          {isLoading ? (
            <Row>
              <Cell>
                <Icon type={IconTypes.loading} />
              </Cell>
            </Row>
          ) : (
            data.map(genre => (
              <Row key={genre.id} active={current?.id === genre.id}>
                <Cell>{genre.name}</Cell>
                <Cell>
                  <EditDeleteButtons
                    edit={async () => {
                      await navigate('/movies/settings/categories')
                      dispatch(setCurrent(genre))
                    }}
                    remove={() =>
                      removeConfirmation(() => handleDelete(genre.id))
                    }
                  />
                </Cell>
              </Row>
            ))
          )}
        </Body>
      </CategoryTable>
      <div>
        <RoundButton onClick={() => navigate('/movies/settings/categories')}>
          <Icon type={IconTypes.plusCircle} />
          Add new
        </RoundButton>
      </div>
    </TableWrapper>
  )
}

export default GenreTable
