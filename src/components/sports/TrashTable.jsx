import { useDispatch, useSelector } from 'react-redux'

import { setCurrent } from 'features/currentSlice'
import { formatDate } from 'utils/formatDate'
import {
  useGetTrashQuery,
  useRestoreMutation,
  useDeletePermanentlyMutation
} from 'app/services/common/trash'
import { throwToast } from 'utils/throwToast'

import Image from 'components/common/Image'
import Icon, { IconTypes } from 'components/common/Icon'
import {
  RoundButton,
  CircleButton
} from 'components/styled/common/Button.styled'
import { TrashTable } from 'components/styled/pages/common/TrashTable.styled'
import { Head, Row, Body, Cell } from 'components/styled/common/Table.styled'

const Table = () => {
  const dispatch = useDispatch()
  const current = useSelector(state => state.current.current)
  const { data, isLoading } = useGetTrashQuery({ url: '/sport-events-trash' })
  const [restore] = useRestoreMutation()
  const [deletePermanently] = useDeletePermanentlyMutation()

  const handleRestore = id => {
    const promise = restore({ url: '/sport-events-trash', id }).unwrap()
    throwToast(promise, 'Restoring post!', 'Post restored!')
  }

  const handleDeletePermanently = id => {
    const promise = deletePermanently({
      url: '/sport-events-trash',
      id
    }).unwrap()
    throwToast(promise, 'Deleting post!', 'Post deleted!')
  }

  return (
    <TrashTable>
      <Head>
        <Row>
          <Cell>Title</Cell>
          <Cell>Author</Cell>
          <Cell>Date</Cell>
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
          data.trash.map(trash => (
            <Row
              key={trash.id}
              active={trash.id === current?.id}
              onClick={() => dispatch(setCurrent(trash))}
            >
              <Cell>
                <Image src={trash.home_team.logo} />
                {trash.home_team.name} - {trash.away_team.name}
                <Image src={trash.away_team.logo} />
              </Cell>
              <Cell>{trash.author}</Cell>
              <Cell>{formatDate(trash.created_at)}</Cell>
              <Cell>
                <RoundButton onClick={() => handleRestore(trash.id)}>
                  <Icon type={IconTypes.edit} />
                  Restore
                </RoundButton>
                <CircleButton onClick={() => handleDeletePermanently(trash.id)}>
                  <Icon type={IconTypes.delete} />
                </CircleButton>
              </Cell>
            </Row>
          ))
        )}
      </Body>
    </TrashTable>
  )
}

export default Table
