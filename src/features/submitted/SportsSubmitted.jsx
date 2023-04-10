import { useSearchParams } from 'react-router-dom'

import {
  useGetSubmittedSportsQuery,
  useMarkSeenSubmittedSportMutation
} from 'features/submitted/sportsSubmittedApiSlice'
import { useDeleteSportMutation } from 'app/services/sport/sport'

import { formatDate } from 'utils/formatDate'
import { throwToast } from 'utils/throwToast'

import QueryErrorBoundary from 'components/common/QueryErrorBoundary'
import MarkSeenBtn from 'components/buttons/MarkSeenBtn'
import DeleteBtn from 'components/buttons/DeleteBtn'
import Pagination from 'components/common/Pagination'
import * as T from 'components/styled/Table.styled'

const SportsSubmitted = () => {
  const [searchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)

  const [markSeen] = useMarkSeenSubmittedSportMutation()
  const [deleteSubmittedSport] = useDeleteSportMutation()

  const { data, ...rest } = useGetSubmittedSportsQuery({ ...params })

  const handleDelete = id =>
    throwToast(
      deleteSubmittedSport({ id }).unwrap(),
      'Deleting post!',
      'Post deleted!'
    )

  return (
    <T.Table>
      <T.Head>
        <T.Row columns='2fr 1fr 1fr 0.5fr 0.7fr 0.3fr'>
          <T.Cell>Title</T.Cell>
          <T.Cell>Sport</T.Cell>
          <T.Cell>Email</T.Cell>
          <T.Cell>Name</T.Cell>
          <T.Cell>Date</T.Cell>
          <T.Cell></T.Cell>
        </T.Row>
      </T.Head>
      <QueryErrorBoundary
        {...rest}
        loadingColumns='2fr 1fr 1fr 0.5fr 0.7fr 0.3fr'
      >
        <T.Body>
          {data?.submitted.map(item => (
            <T.Row
              key={item.id}
              disabled={item.seen}
              columns='2fr 1fr 1fr 0.5fr 0.7fr 0.3fr'
            >
              <T.Cell>
                {item.home_team.name} - {item.away_team.name}
              </T.Cell>
              <T.Cell>{item.sport.name}</T.Cell>
              <T.Cell>{item.submit_email}</T.Cell>
              <T.Cell>{item.submit_name}</T.Cell>
              <T.Cell opacity='0.5'>{formatDate(item.created_at)}</T.Cell>
              <T.Cell gap='0.5rem'>
                <MarkSeenBtn markSeenFn={() => markSeen({ id: item.id })} />
                <DeleteBtn deleteFn={() => handleDelete(item.id)} />
              </T.Cell>
            </T.Row>
          ))}
        </T.Body>
      </QueryErrorBoundary>
      {!rest.isLoading && (
        <Pagination data={data?.pagination} isFetching={rest.isFetching} />
      )}
    </T.Table>
  )
}

export default SportsSubmitted
