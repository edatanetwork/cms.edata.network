import TvEventRow from './TvEventRow'

import Icon, { IconTypes } from 'components/common/Icon'
import * as S from 'components/styled/common/AccordionTable.styled'

const TvEventsTable = () => {
  return (
    <S.TvEventsTable>
      <S.Head>
        <S.Row>
          <S.Cell>Title</S.Cell>
          <S.Cell>Country</S.Cell>
          <S.Cell>
            <S.Sort>
              Views
              <Icon type={IconTypes.arrows} />
            </S.Sort>
          </S.Cell>
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
        <TvEventRow />
      </S.Body>
    </S.TvEventsTable>
  )
}

export default TvEventsTable
