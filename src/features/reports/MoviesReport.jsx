import { useSearchParams } from 'react-router-dom'

import { useGetLinkReportsQuery } from 'features/reports/linkReportApiSlice'

import { formatDate } from 'utils/formatDate'

import QueryErrorBoundary from 'components/common/QueryErrorBoundary'
import Pagination from 'components/common/Pagination'
import MarkSeenBtn from 'components/buttons/MarkSeenBtn'
import DeleteBtn from 'components/buttons/DeleteBtn'
import * as T from 'components/styled/Table.styled'

const MoviesReport = () => {
  const [searchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)

  const { data, ...rest } = useGetLinkReportsQuery({
    type: 'movies',
    ...params
  })

  return (
    <T.Table>
      <T.Head>
        <T.Row columns='3fr 1fr 1fr 0.3fr'>
          <T.Cell>Title</T.Cell>
          <T.Cell>Domain</T.Cell>
          <T.Cell>Date</T.Cell>
        </T.Row>
      </T.Head>
      <QueryErrorBoundary {...rest} loadingColumns='3fr 1fr 1fr 0.3fr'>
        <T.Body>
          {data?.reports.map(item => (
            <T.Row
              disabled={item.seen}
              key={item.id}
              columns='3fr 1fr 1fr 0.3fr'
            >
              <T.Cell>{item.link.url}</T.Cell>
              <T.Cell>{item.domain.name}</T.Cell>
              <T.Cell>
                {formatDate(item.created_at ?? new Date().toISOString())}
              </T.Cell>
              <T.Cell gap='0.5rem'>
                <MarkSeenBtn />
                <DeleteBtn />
              </T.Cell>
            </T.Row>
          ))}
        </T.Body>
      </QueryErrorBoundary>
      {!rest.isLoading && <Pagination data={data.pagination} />}
    </T.Table>
  )
}

export default MoviesReport
