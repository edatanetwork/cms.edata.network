import { useState } from 'react'

import FavEditDel from 'components/common/FavEditDel'
import Votes from 'components/common/VoteCount'
import * as S from 'components/styled/common/AccordionTable.styled'

const TvEventRow = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <S.Row isActive={isActive}>
        <S.Cell>
          <S.Status color='#4db500' />
        </S.Cell>
        <S.Cell onClick={() => setIsActive(!isActive)}>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/6/67/Fox_News_Channel_logo.svg'
            alt='channel'
          />
          Fox NewsFox News
        </S.Cell>
        <S.Cell>Deu</S.Cell>
        <S.Cell>1392</S.Cell>
        <S.Cell>Gerinzo</S.Cell>
        <S.Cell>12.11.2021 20:45</S.Cell>
        <S.Cell>
          <FavEditDel />
        </S.Cell>
      </S.Row>
      {isActive && (
        <S.AccordionRow>
          <S.Cell>1.</S.Cell>
          <S.Cell>Link 1</S.Cell>
          <S.Cell>
            <a>Open</a> <Votes upVotes={23} downVotes={4} />
          </S.Cell>
          <S.Cell>362</S.Cell>
          <S.Cell>Alb</S.Cell>
          <S.Cell>English</S.Cell>
          <S.Cell>
            <FavEditDel />
          </S.Cell>
        </S.AccordionRow>
      )}
    </>
  )
}

export default TvEventRow
