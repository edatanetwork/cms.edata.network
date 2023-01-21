import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  useDeleteTvGenreMutation,
  useGetTvGenresQuery
} from 'app/services/tv/genre'
import { throwToast, removeConfirmation } from 'utils/throwToast'
import { setCurrent } from 'features/currentSlice'

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
  const { data, isLoading } = useGetTvGenresQuery()
  const [deleteTvGenre] = useDeleteTvGenreMutation()

  const handleDelete = id => {
    const promise = deleteTvGenre(id).unwrap()
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
              <Row
                key={genre.id}
                active={current?.id + current?.name === genre.id + genre.name}
              >
                <Cell>{genre.name}</Cell>
                <Cell>
                  <EditDeleteButtons
                    edit={() => dispatch(setCurrent(genre))}
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
        <RoundButton onClick={() => navigate('/tv/settings/categories')}>
          <Icon type={IconTypes.plusCircle} />
          Add new
        </RoundButton>
      </div>
    </TableWrapper>
  )
}

export default GenreTable
