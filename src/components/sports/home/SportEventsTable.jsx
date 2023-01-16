import SportEventRow from './SportEventRow'

import * as S from 'components/styled/common/AccordionTable.styled'
import Icon, { IconTypes } from 'components/common/Icon'

const SportEventsTable = () => {
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
        <SportEventRow />
      </S.Body>
    </S.SportEventsTable>
  )
}

export default SportEventsTable
