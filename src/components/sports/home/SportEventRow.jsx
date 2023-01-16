import { useState } from 'react'

import * as S from 'components/styled/common/AccordionTable.styled'

import FavEditDel from 'components/common/FavEditDel'
import Votes from 'components/common/VoteCount'

const SportEventRow = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <S.Row isActive={isActive}>
        <S.Cell>
          <S.Status color='#4db500' />
        </S.Cell>
        <S.Cell onClick={() => setIsActive(!isActive)}>
          <img
            src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1024px-Paris_Saint-Germain_F.C..svg.png'
            alt='home team'
          />
          Paris Saint-Germain F.C. - RB Leipzig
          <img
            src='https://upload.wikimedia.org/wikipedia/en/thumb/0/04/RB_Leipzig_2014_logo.svg/1920px-RB_Leipzig_2014_logo.svg.png'
            alt='away team'
          />
        </S.Cell>
        <S.Cell>20:45</S.Cell>
        <S.Cell>-14 min</S.Cell>
        <S.Cell>1392</S.Cell>
        <S.Cell>
          <img src='https://vectorflags.s3-us-west-2.amazonaws.com/flags/org-eu-circle-01.png' />
          Champions League
        </S.Cell>
        <S.Cell>Gerinzo</S.Cell>
        <S.Cell>12.11.2021 20:45</S.Cell>
        <S.Cell>
          <FavEditDel />
        </S.Cell>
      </S.Row>
      {isActive && (
        <S.AccordionRow>
          <S.Cell>1.</S.Cell>
          <S.Cell>
            Fox Sport <a>Open</a>
          </S.Cell>
          <S.Cell>
            <Votes upVotes={23} downVotes={4} />
          </S.Cell>
          <S.Cell>362</S.Cell>
          <S.Cell>Alb</S.Cell>
          <S.Cell>English</S.Cell>
          <S.Cell>Mobile</S.Cell>
          <S.Cell>
            <FavEditDel />
          </S.Cell>
        </S.AccordionRow>
      )}
    </>
  )
}

export default SportEventRow
