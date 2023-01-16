import { useState } from 'react'
import * as S from 'components/styled/common/AccordionTable.styled'

import Votes from 'components/common/VoteCount'

const MovieEventRow = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <S.Row isActive={isActive}>
        <S.Cell>
          <S.Status color='#4db500' />
        </S.Cell>
        <S.Cell onClick={() => setIsActive(!isActive)}>
          <img
            src='https://upload.wikimedia.org/wikipedia/en/d/d1/The_Harder_They_Fall_%282021_film%29.jpg'
            alt='channel'
          />
          The Harder They Fall
        </S.Cell>
        <S.Cell>Comedy, Thriller</S.Cell>
        <S.Cell>85 min</S.Cell>
        <S.Cell>1392</S.Cell>
        <S.Cell>Gerinzo</S.Cell>
        <S.Cell>12.11.2021 20:45</S.Cell>
        <S.Cell>Actions</S.Cell>
      </S.Row>
      {isActive && (
        <S.AccordionRow>
          <S.Cell>1.</S.Cell>
          <S.Cell>Link</S.Cell>
          <S.Cell>
            <a>Open</a> <Votes upVotes={23} downVotes={4} />
          </S.Cell>
          <S.Cell>362</S.Cell>
          <S.Cell>Alb</S.Cell>
          <S.Cell>English</S.Cell>
          <S.Cell>Mobile</S.Cell>
          <S.Cell>Actions</S.Cell>
        </S.AccordionRow>
      )}
    </>
  )
}

export default MovieEventRow
