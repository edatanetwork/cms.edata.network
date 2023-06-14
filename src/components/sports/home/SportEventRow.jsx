import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { formatDate } from 'utils/formatDate'
import { setCurrent } from 'features/currentSlice'
import { throwToast, removeConfirmation } from 'utils/throwToast'
import {
  useDeleteMatchMutation,
  useFavoriteMatchMutation
} from 'app/services/sport/matches'
import { useDeleteLinkMutation } from 'app/services/common/links'

import Icon, { IconTypes } from 'components/common/Icon'
import Image from 'components/common/Image'
import Votes from 'components/common/VoteCount'
import FavEditDel from 'components/common/FavEditDel'
import * as S from 'components/styled/common/AccordionTable.styled'

const getStatus = (startTime, endTime) => {
  const now = new Date()
  const start = new Date(startTime)
  const end = new Date(endTime)

  if (now < start) {
    return '#0066FF'
  }

  if (start < now && now < end) {
    return '#4DB500'
  }

  if (now > end) {
    return '#939393'
  }
}

const SportEventRow = props => {
  const dispatch = useDispatch()
  const [isActive, setIsActive] = useState(false)
  const [deleteMatch] = useDeleteMatchMutation()
  const [favoriteMatch] = useFavoriteMatchMutation()
  const [deleteLink] = useDeleteLinkMutation()

  const start_time = props.start_time?.split(' ')[1].slice(0, -3)
  const end_time = props.end_time_calculated?.split(' ')[1].slice(0, -3)

  const handleFavorite = () => {
    const favourite =
      props.favourite === null || props.favourite === false ? true : false

    const promise = favoriteMatch({ id: props.id, favourite }).unwrap()
    throwToast(
      promise,
      'Marking match as favourite!',
      'Match marked as favourite!'
    )
  }

  const handleDelete = id => {
    const promise = deleteMatch(id).unwrap()
    throwToast(promise, 'Deleting match!', 'Match deleted!')
  }

  const handleDeleteLink = id => {
    const promise = deleteLink(id).unwrap()
    throwToast(promise, 'Deleting link!', 'Link deleted!')
  }

  return (
    <>
      <S.Row isActive={isActive}>
        <S.Cell>
          <S.Status
            color={getStatus(props.start_time, props.end_time_calculated)}
          />
        </S.Cell>
        <S.Cell onClick={() => props.links && setIsActive(!isActive)}>
          <Image src={props.home_team?.logo} />
          {props.home_team.name} - {props.away_team.name}
          <Image src={props.away_team?.logo} />
        </S.Cell>
        <S.Cell>{start_time}</S.Cell>
        <S.Cell>{end_time}</S.Cell>
        <S.Cell>{props.views}</S.Cell>
        <S.Cell>
          <Image src={props.league?.logo} />
          {props.league?.name}
        </S.Cell>
        <S.Cell>{props.author}</S.Cell>
        <S.Cell>{formatDate(props.created_at)}</S.Cell>
        <S.Cell>
          <FavEditDel
            isFavourite={props.favourite}
            favourite={handleFavorite}
            edit={() => dispatch(setCurrent(props))}
            remove={() => removeConfirmation(() => handleDelete(props.id))}
          />
        </S.Cell>
      </S.Row>
      {isActive &&
        props.links?.map((link, i) => (
          <S.AccordionRow key={link.id}>
            <S.Cell>{i + 1}.</S.Cell>
            <S.Cell>
              <Image src={link.channel.logo} />
              {link.channel.name}
              <a>
                Open <Icon type={IconTypes.newTab} />
              </a>
            </S.Cell>
            <S.Cell>
              <Votes upVotes={23} downVotes={4} />
            </S.Cell>
            <S.Cell>{props.duration}</S.Cell>
            <S.Cell>{props.country.name}</S.Cell>
            <S.Cell>{link.language.name}</S.Cell>
            <S.Cell>{link.quality}</S.Cell>
            <S.Cell>
              <FavEditDel
                edit={() => dispatch(setCurrent(props))}
                remove={() =>
                  removeConfirmation(() => handleDeleteLink(link.id))
                }
              />
            </S.Cell>
          </S.AccordionRow>
        ))}
    </>
  )
}

export default SportEventRow
