import { useDispatch } from 'react-redux'

import {
  useGetVotesQuery,
  useDeleteVoteMutation,
  useSeenVoteMutation
} from 'app/services/votes'
import { setCurrent } from 'features/currentSlice'

import { throwToast } from 'utils/throwToast'
import { formatDate } from 'utils/formatDate'

import Pagination from 'components/common/Pagination'
import Image from 'components/common/Image'
import Icon, { IconTypes } from 'components/common/Icon'
import { Grid } from 'components/styled/common/Grid.styled'
import { CircleButton } from 'components/styled/common/Button.styled'
import { VotesTable } from 'components/styled/pages/common/VoteTable.styled'
import { Head, Body, Row, Cell } from 'components/styled/common/Table.styled'

const Votes = () => {
  const dispatch = useDispatch()
  const { data, isLoading, isFetching } = useGetVotesQuery()

  const [seenVote] = useSeenVoteMutation()
  const [deleteVote] = useDeleteVoteMutation()

  const handleDelete = id => {
    const promise = deleteVote(id).unwrap()
    throwToast(promise, 'Deleting vote!', 'Vote deleted!')
  }

  return (
    <Grid>
      <VotesTable>
        <Head>
          <Row>
            <Cell>Title</Cell>
            <Cell>Domain</Cell>
            <Cell>Date</Cell>
          </Row>
        </Head>
        <Body>
          {isLoading || isFetching ? (
            <Row>
              <Cell>
                <Icon type={IconTypes.loading} />
              </Cell>
              <Cell></Cell>
            </Row>
          ) : (
            data.votes.map(vote => (
              <Row seen={vote.seen} key={vote.id}>
                <Cell>
                  <Image
                    src={vote.post.post_images[0].preview}
                    width={64}
                    height={50}
                    quality={90}
                    format='webp'
                  />
                  {vote.post.title}
                </Cell>
                <Cell>{vote.domain.name}</Cell>
                <Cell>{formatDate(vote.created_at)}</Cell>
                <Cell>
                  <Icon
                    type={
                      vote.vote
                        ? IconTypes.squareIconUp
                        : IconTypes.squareIconDown
                    }
                  />
                  <CircleButton
                    disabled={vote.seen}
                    onClick={() => seenVote(vote.id)}
                  >
                    <Icon type={IconTypes.eye} />
                  </CircleButton>
                  <CircleButton onClick={() => dispatch(setCurrent(vote.post))}>
                    <Icon type={IconTypes.edit} />
                  </CircleButton>
                  <CircleButton onClick={() => handleDelete(vote.id)}>
                    <Icon type={IconTypes.delete} />
                  </CircleButton>
                </Cell>
              </Row>
            ))
          )}
        </Body>
      </VotesTable>
      {!isLoading && <Pagination data={data.pagination} />}
    </Grid>
  )
}

export default Votes
