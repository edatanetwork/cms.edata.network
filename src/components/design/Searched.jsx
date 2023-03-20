import { useSearchParams } from 'react-router-dom'
import { useGetSearchedQuery } from 'app/services/searches'

import { formatDate } from 'utils/formatDate'

import Pagination from 'components/common/Pagination'
import Icon, { IconTypes } from 'components/common/Icon'
import { SearchedTable } from 'components/styled/pages/common/SearchedTable.styled'
import { Head, Body, Row, Cell } from 'components/styled/common/Table.styled'
import { RoundButton } from 'components/styled/common/Button.styled'

const Searched = () => {
  const [searchParams] = useSearchParams()
  const params = Object.fromEntries(searchParams)
  const { data, isLoading } = useGetSearchedQuery(params)

  return (
    <>
      <SearchedTable>
        <Head>
          <Row>
            <Cell>Searched</Cell>
            <Cell>Result</Cell>
            <Cell>Domain</Cell>
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
            data.searched.map(search => (
              <Row key={search.id}>
                <Cell>
                  {search.search} ({search.count})
                </Cell>
                <Cell>{search.posts_count}</Cell>
                <Cell>{search.domain.name}</Cell>
                <Cell>{formatDate(search.created_at)}</Cell>
                <Cell>
                  <RoundButton>
                    <Icon type={IconTypes.delete} />
                  </RoundButton>
                </Cell>
              </Row>
            ))
          )}
        </Body>
      </SearchedTable>
      {!isLoading && <Pagination data={data.pagination} />}
    </>
  )
}

export default Searched
