import { useSelector, useDispatch } from 'react-redux'
import {
  useGetTrashQuery,
  useRestoreMutation,
  useDeletePermanentlyMutation
} from 'app/services/common/trash'

import { throwToast } from 'utils/throwToast'
import { formatDate } from 'utils/formatDate'
import { setCurrent } from 'features/currentSlice'

import Image from 'components/common/Image'
import Pagination from 'components/common/Pagination'
import Icon, { IconTypes } from 'components/common/Icon'
import { Grid } from 'components/styled/common/Grid.styled'
import { TrashTable } from 'components/styled/pages/common/TrashTable.styled'
import { Head, Body, Row, Cell } from 'components/styled/common/Table.styled'
import {
  RoundButton,
  CircleButton
} from 'components/styled/common/Button.styled'

const Trash = () => {
  const dispatch = useDispatch()
  const { data, isLoading, isFetching } = useGetTrashQuery({ url: '/trash' })
  const current = useSelector(state => state.current.current)

  const [restore] = useRestoreMutation()
  const [deletePermanently] = useDeletePermanentlyMutation()

  const handleRestore = id => {
    const promise = restore({ url: '/trash', id }).unwrap()
    throwToast(promise, 'Restoring post!', 'Post restored!')
  }

  const handleDeletePermanently = id => {
    const promise = deletePermanently({ url: '/trash', id }).unwrap()
    throwToast(promise, 'Deleting post!', 'Post deleted!')
  }

  return (
    <Grid>
      <TrashTable>
        <Head>
          <Row>
            <Cell>Title</Cell>
            <Cell>Author</Cell>
            <Cell>Date</Cell>
          </Row>
        </Head>
        <Body>
          {isLoading || isFetching ? (
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
                  <Image
                    src={trash.post_images && trash.post_images[0].preview}
                    width={64}
                    height={50}
                    quality={90}
                    format='webp'
                  />
                  {trash.title}
                </Cell>
                <Cell>{trash.author}</Cell>
                <Cell>{formatDate(trash.created_at)}</Cell>
                <Cell>
                  <RoundButton onClick={() => handleRestore(trash.id)}>
                    <Icon type={IconTypes.edit} />
                    Restore
                  </RoundButton>
                  <CircleButton
                    onClick={() => handleDeletePermanently(trash.id)}
                  >
                    <Icon type={IconTypes.delete} />
                  </CircleButton>
                </Cell>
              </Row>
            ))
          )}
        </Body>
      </TrashTable>
      {!isLoading && <Pagination data={data.pagination} />}
    </Grid>
  )
}

export default Trash
