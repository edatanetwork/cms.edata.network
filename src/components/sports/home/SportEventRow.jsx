import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { formatDate } from 'utils/formatDate'
import { setCurrent } from 'features/currentSlice'
import { throwToast, removeConfirmation } from 'utils/throwToast'
import { useDeleteMatchMutation } from 'app/services/sport/matches'

import Image from 'components/common/Image'
import Votes from 'components/common/VoteCount'
import FavEditDel from 'components/common/FavEditDel'
import * as S from 'components/styled/common/AccordionTable.styled'

const SportEventRow = props => {
  const dispatch = useDispatch()
  const [isActive, setIsActive] = useState(false)
  const [deleteMatch] = useDeleteMatchMutation()

  const start_time = props.start_time.split(' ')[1].slice(0, -3)

  const handleDelete = id => {
    const promise = deleteMatch(id).unwrap()
    throwToast(promise, 'Deleting match!', 'Match deleted!')
  }

  return (
    <>
      <S.Row isActive={isActive}>
        <S.Cell>
          <S.Status color='#4db500' />
        </S.Cell>
        <S.Cell onClick={() => setIsActive(!isActive)}>
          <Image src={props.home_team.logo} />
          {props.home_team.name} - {props.away_team.name}
          <Image src={props.away_team.logo} />
        </S.Cell>
        <S.Cell>{start_time}</S.Cell>
        <S.Cell>-14 min</S.Cell>
        <S.Cell>0</S.Cell>
        <S.Cell>
          <Image src={props.league.logo} />
          {props.league.name}
        </S.Cell>
        <S.Cell>{props.author}</S.Cell>
        <S.Cell>{formatDate(props.created_at)}</S.Cell>
        <S.Cell>
          <FavEditDel
            edit={() => dispatch(setCurrent(props))}
            remove={() => removeConfirmation(() => handleDelete(props.id))}
          />
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
