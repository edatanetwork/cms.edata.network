import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { setCurrent } from 'features/currentSlice'

import { formatDate } from 'utils/formatDate'
import { throwToast } from 'utils/throwToast'

import {
  useGetPostsVoteQuery,
  useDeletePostVoteMutation,
  useSeePostVoteMutation
} from 'features/votes/postVotesApiSlice'

import QueryErrorBoundary from 'components/common/QueryErrorBoundary'
import Image from 'components/common/Image'
import Pagination from 'components/common/Pagination'
import Icon, { IconTypes } from 'components/common/Icon'
import * as T from 'components/styled/Table.styled'
import { CircleButton } from 'components/styled/common/Button.styled'

const PostsVote = () => {
  const [searchParams] = useSearchParams()

  const { data, ...rest } = useGetPostsVoteQuery(
    Object.fromEntries(searchParams)
  )

  return (
    <T.Table>
      <T.Head>
        <T.Row columns='3fr 1fr 0.5fr 0.6fr'>
          <T.Cell>Title</T.Cell>
          <T.Cell>Domain</T.Cell>
          <T.Cell>Date</T.Cell>
        </T.Row>
      </T.Head>
      <QueryErrorBoundary loadingColumns='3fr 1fr 0.5fr 0.6fr' {...rest}>
        <T.Body>
          {data?.votes.map(vote => (
            <Row key={vote.id} item={vote} />
          ))}
        </T.Body>
      </QueryErrorBoundary>
      {!rest.isLoading && (
        <Pagination data={data.pagination} isFetching={rest.isFetching} />
      )}
    </T.Table>
  )
}

const Row = ({ item }) => {
  const dispatch = useDispatch()

  const [seePostVote] = useSeePostVoteMutation()
  const [deletePostVote] = useDeletePostVoteMutation()

  const handleSee = () => {
    seePostVote(item.id)
  }

  const handleEdit = () => {
    dispatch(setCurrent(item.post))
  }

  const handleDelete = () => {
    const promise = deletePostVote(item.id).unwrap()
    throwToast(promise, 'Deleting vote!', 'Vote deleted!')
  }

  return (
    <T.Row columns='3fr 1fr 0.5fr 0.6fr' disabled={item.seen}>
      <T.Cell gap='0.5rem'>
        <Image width={64} height={50} src={item.post.post_images[0].preview} />
        {item.post.title}
      </T.Cell>
      <T.Cell gap='0.5rem' opacity='0.3'>
        {item.domain.name}
      </T.Cell>
      <T.Cell opacity='0.3'>{formatDate(item.created_at)}</T.Cell>
      <T.Cell gap='0.5rem'>
        <Icon
          type={item.vote ? IconTypes.squareIconUp : IconTypes.squareIconDown}
        />
        <CircleButton disabled={item.seen} onClick={handleSee}>
          <Icon type={IconTypes.eye} />
        </CircleButton>
        <CircleButton onClick={handleEdit}>
          <Icon type={IconTypes.edit} />
        </CircleButton>
        <CircleButton onClick={handleDelete}>
          <Icon type={IconTypes.delete} />
        </CircleButton>
      </T.Cell>
    </T.Row>
  )
}

export default PostsVote
