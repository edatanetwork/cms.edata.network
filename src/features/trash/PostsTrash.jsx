import { useSearchParams } from 'react-router-dom'

import { formatDate } from 'utils/formatDate'
import { throwToast } from 'utils/throwToast'
import {
  useGetTrashesQuery,
  useDeleteTrashMutation,
  useRestoreTrashMutation
} from 'features/trash/trashApiSlice'

import QueryErrorBoundary from 'components/common/QueryErrorBoundary'
import Pagination from 'components/common/Pagination'
import Image from 'components/common/Image'
import DeleteBtn from 'components/buttons/DeleteBtn'
import RestoreBtn from 'components/buttons/RestoreBtn'
import * as T from 'components/styled/Table.styled'

const PostsTrash = () => {
  const [searchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)

  const { data, isLoading, isSuccess, isError, isFetching } =
    useGetTrashesQuery({
      url: 'trash',
      params
    })

  return (
    <T.Table>
      <T.Head>
        <T.Row columns='3fr 2fr 1fr 1fr'>
          <T.Cell>Title</T.Cell>
          <T.Cell>Author</T.Cell>
          <T.Cell>Date</T.Cell>
          <T.Cell>Actions</T.Cell>
        </T.Row>
      </T.Head>
      <QueryErrorBoundary
        isLoading={isLoading}
        isSuccess={isSuccess}
        isFetching={isFetching}
        isError={isError}
        loadingColumns='3fr 2fr 1fr 1fr'
      >
        <T.Body>
          {data?.ids.map(id => (
            <Row key={id} item={data?.entities[id]} />
          ))}
        </T.Body>
      </QueryErrorBoundary>
      {!isLoading && <Pagination data={data.pagination} />}
    </T.Table>
  )
}

const Row = ({ item }) => {
  const [deleteTrash] = useDeleteTrashMutation()
  const [restoreTrash] = useRestoreTrashMutation()

  const handleDelete = () =>
    throwToast(
      deleteTrash({ url: 'trash', id: item.id }).unwrap(),
      'Deleting post!',
      'Post deleted!'
    )

  const handleRestore = () =>
    throwToast(
      restoreTrash({ url: 'trash', id: item.id }).unwrap(),
      'Restoring post!',
      'Post restored!'
    )

  return (
    <T.Row columns='3fr 2fr 1fr 1fr'>
      <T.Cell gap='0.5rem'>
        <Image
          src={item.post_images && item.post_images[0].preview}
          width={64}
          height={50}
          quality={90}
          format='webp'
        />
        {item.title}
      </T.Cell>
      <T.Cell>{item.author}</T.Cell>
      <T.Cell opacity='0.3'>{formatDate(item.created_at)}</T.Cell>
      <T.Cell gap='0.5rem'>
        <RestoreBtn restoreFn={handleRestore} />
        <DeleteBtn deleteFn={handleDelete} />
      </T.Cell>
    </T.Row>
  )
}

export default PostsTrash
