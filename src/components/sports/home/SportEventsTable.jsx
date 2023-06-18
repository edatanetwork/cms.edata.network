import { useGetMatchesQuery } from 'app/services/sport/matches'

import useSortParams from 'utils/useSortParams'
import useFilterParams from 'utils/useFilterParams'

import Icon, { IconTypes } from 'components/common/Icon'
import SportEventRow from 'components/sports/home/SportEventRow'
import * as S from 'components/styled/common/AccordionTable.styled'

const SportEventsTable = () => {
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
              Start <Icon type={IconTypes.arrows} />
            </S.Sort>
          </S.Cell>
          <S.Cell>
            <S.Sort onClick={() => handleChange('end_time')}>
              End <Icon type={IconTypes.arrows} />
            </S.Sort>
          </S.Cell>
          <S.Cell>
            <S.Sort>
              Views <Icon type={IconTypes.arrows} />
            </S.Sort>
          </S.Cell>
          <S.Cell>League</S.Cell>
          <S.Cell>
            <S.Sort>
              Author
              <Icon type={IconTypes.arrows} />
            </S.Sort>
          </S.Cell>
          <S.Cell>
            <S.Sort>
              Date
              <Icon type={IconTypes.arrows} />
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
