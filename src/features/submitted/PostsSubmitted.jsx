import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { setCurrent } from 'features/currentSlice'

import {
  useGetSubmittedPostsQuery,
  useMarkSeenSubmittedPostsMutation
} from 'features/submitted/postsSubmittedApiSlice'

import { formatDate } from 'utils/formatDate'

import QueryErrorBoundary from 'components/common/QueryErrorBoundary'
import MarkSeenBtn from 'components/buttons/MarkSeenBtn'
import DeleteBtn from 'components/buttons/DeleteBtn'
import Pagination from 'components/common/Pagination'
import * as T from 'components/styled/Table.styled'

const SubmittedPosts = () => {
  const [searchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)
  const { data, ...rest } = useGetSubmittedPostsQuery({ params })

  return (
    <T.Table>
      <T.Head>
        <T.Row columns='3fr 1fr 0.7fr 0.3fr'>
          <T.Cell>Title</T.Cell>
          <T.Cell>Domain</T.Cell>
          <T.Cell>Date</T.Cell>
          <T.Cell></T.Cell>
        </T.Row>
      </T.Head>
      <QueryErrorBoundary {...rest} loadingColumns='3fr 1fr 0.7fr'>
        <T.Body>
          {data?.ids?.map(id => (
            <SubmittedPostRow key={id} post={data.entities[id]} />
          ))}
        </T.Body>
      </QueryErrorBoundary>
      {!rest.isLoading && (
        <Pagination data={data?.pagination} isFetching={rest.isFetching} />
      )}
    </T.Table>
  )
}

const SubmittedPostRow = ({ post }) => {
  const dispatch = useDispatch()
  const [markSeenPost] = useMarkSeenSubmittedPostsMutation()

  const handleClick = () => {
    dispatch(setCurrent(post))
  }

  return (
    <T.Row disabled={post.seen} columns='3fr 1fr 0.7fr 0.3fr'>
      <T.Cell onClick={handleClick}>{post.title}</T.Cell>
      <T.Cell>{post.submitted_from?.name}</T.Cell>
      <T.Cell opacity='0.5'>{formatDate(post.created_at)}</T.Cell>
      <T.Cell gap='0.5rem'>
        <MarkSeenBtn markSeenFn={() => markSeenPost({ postId: post.id })} />
        <DeleteBtn />
      </T.Cell>
    </T.Row>
  )
}

export default SubmittedPosts
