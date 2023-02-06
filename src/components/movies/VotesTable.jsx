import {
  useGetVotesLinkQuery,
  useSeenVoteLinkMutation,
  useDeleteVoteLinkMutation
} from 'app/services/common/linkVotes'

import { throwToast, removeConfirmation } from 'utils/throwToast'
import { formatDate } from 'utils/formatDate'

import Pagination from 'components/common/Pagination'
import Icon, { IconTypes } from 'components/common/Icon'
import { Grid } from 'components/styled/common/Grid.styled'
import { CircleButton } from 'components/styled/common/Button.styled'
import * as T from 'components/styled/Table.styled'

const VotesTable = () => {
  const { data, isLoading } = useGetVotesLinkQuery({ type: 'movies' })
  const [seenVote] = useSeenVoteLinkMutation()
  const [deleteVote] = useDeleteVoteLinkMutation()

  const handleDelete = id => {
    const promise = deleteVote(id).unwrap()
    throwToast(promise, 'Deleting vote!', 'Vote deleted!')
  }

  return (
    <Grid>
      <T.Table>
        <T.Head>
          <T.Row columns='2.5fr 1fr 1fr 0.5fr'>
            <T.Cell>Link</T.Cell>
            <T.Cell>Domain</T.Cell>
            <T.Cell>Date</T.Cell>
          </T.Row>
        </T.Head>
        <T.Body>
          {isLoading ? (
            <T.Row>
              <T.Cell>
                <Icon type={IconTypes.loading} />
              </T.Cell>
            </T.Row>
          ) : (
            data.votes.map(vote => (
              <T.Row
                disabled={vote.seen}
                key={vote.id}
                columns='2.5fr 1fr 1fr 0.5fr'
              >
                <T.Cell>{vote.link.url}</T.Cell>
                <T.Cell>{vote.domain.name}</T.Cell>
                <T.Cell opacity={0.5}>{formatDate(vote.created_at)}</T.Cell>
                <T.Cell gap='1rem'>
                  <Icon
                    type={
                      vote.vote
                        ? IconTypes.squareIconUp
                        : IconTypes.squareIconDown
                    }
                  />
                  <CircleButton onClick={() => seenVote(vote.id)}>
                    <Icon type={IconTypes.eye} />
                  </CircleButton>
                  <CircleButton
                    onClick={() =>
                      removeConfirmation(() => handleDelete(vote.id))
                    }
                  >
                    <Icon type={IconTypes.delete} />
                  </CircleButton>
                </T.Cell>
              </T.Row>
            ))
          )}
        </T.Body>
      </T.Table>
      {!isLoading && <Pagination data={data.pagination} />}
    </Grid>
  )
}

export default VotesTable
