import { useSearchParams } from 'react-router-dom'
import { useGetMatchesQuery } from 'app/services/sport/matches'

import useSortParams from 'utils/useSortParams'
import useFilterParams from 'utils/useFilterParams'

import Icon, { IconTypes } from 'components/common/Icon'
import SportEventRow from 'components/sports/home/SportEventRow'
import * as S from 'components/styled/common/AccordionTable.styled'

const SportEventsTable = () => {
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search') || undefined

  const [handleChange, sortParams] = useSortParams([
    'start_time',
    'end_time',
    'created_at',
    'views',
    'author'
  ])
  const [filterParams] = useFilterParams([
    'sport_id',
    'country_id',
    'league_id',
    'author_id'
  ])

  const { data, isLoading, isFetching } = useGetMatchesQuery({
    search,
    ...sortParams,
    ...filterParams
  })

  return (
    <S.SportEventsTable>
      <S.Head>
        <S.Row>
          <S.Cell>Title</S.Cell>
          <S.Cell>
            <S.Sort onClick={() => handleChange('start_time')}>
              Start
              {sortParams['start_time_desc'] ? (
                <Icon type={IconTypes.arrowDown} />
              ) : sortParams['start_time_asc'] ? (
                <Icon type={IconTypes.arrowUp} />
              ) : (
                <Icon type={IconTypes.arrows} />
              )}
            </S.Sort>
          </S.Cell>
          <S.Cell>
            <S.Sort onClick={() => handleChange('end_time')}>
              End{' '}
              {sortParams['end_time_desc'] ? (
                <Icon type={IconTypes.arrowDown} />
              ) : sortParams['end_time_asc'] ? (
                <Icon type={IconTypes.arrowUp} />
              ) : (
                <Icon type={IconTypes.arrows} />
              )}
            </S.Sort>
          </S.Cell>
          <S.Cell>
            <S.Sort onClick={() => handleChange('views')}>
              Views
              {sortParams['views_desc'] ? (
                <Icon type={IconTypes.arrowDown} />
              ) : sortParams['views_asc'] ? (
                <Icon type={IconTypes.arrowUp} />
              ) : (
                <Icon type={IconTypes.arrows} />
              )}
            </S.Sort>
          </S.Cell>
          <S.Cell>League</S.Cell>
          <S.Cell>
            <S.Sort onClick={() => handleChange('author')}>
              Author
              {sortParams['author_desc'] ? (
                <Icon type={IconTypes.arrowDown} />
              ) : sortParams['author_asc'] ? (
                <Icon type={IconTypes.arrowUp} />
              ) : (
                <Icon type={IconTypes.arrows} />
              )}
            </S.Sort>
          </S.Cell>
          <S.Cell>
            <S.Sort onClick={() => handleChange('created_at')}>
              Date
              {sortParams['created_at_desc'] ? (
                <Icon type={IconTypes.arrowDown} />
              ) : sortParams['created_at_asc'] ? (
                <Icon type={IconTypes.arrowUp} />
              ) : (
                <Icon type={IconTypes.arrows} />
              )}
            </S.Sort>
          </S.Cell>
        </S.Row>
      </S.Head>
      <S.Body>
        {isLoading || isFetching ? (
          <S.Row>
            <Icon type={IconTypes.loading} />
          </S.Row>
        ) : (
          data.matches.map(match => (
            <SportEventRow
              key={match.id + match.home_team.name + match.away_team.name}
              {...match}
            />
          ))
        )}
      </S.Body>
    </S.SportEventsTable>
  )
}

export default SportEventsTable
