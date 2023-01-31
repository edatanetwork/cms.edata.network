import { useGetMatchesQuery } from 'app/services/sport/matches'

import Icon, { IconTypes } from 'components/common/Icon'
import SportEventRow from 'components/sports/home/SportEventRow'
import * as S from 'components/styled/common/AccordionTable.styled'

const SportEventsTable = () => {
  const { data, isLoading, isFetching } = useGetMatchesQuery()
  return (
    <S.SportEventsTable>
      <S.Head>
        <S.Row>
          <S.Cell>Title</S.Cell>
          <S.Cell>
            <S.Sort>
              Start <Icon type={IconTypes.arrows} />
            </S.Sort>
          </S.Cell>
          <S.Cell>
            <S.Sort>
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
          data.matches.map(match => <SportEventRow key={match.id} {...match} />)
        )}
      </S.Body>
    </S.SportEventsTable>
  )
}

export default SportEventsTable
