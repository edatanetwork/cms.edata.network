import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { useDeleteChannelMutation } from 'app/services/tv/channels'
import { useDeleteLinkMutation } from 'app/common/links'
import { formatDate } from 'utils/formatDate'
import { setCurrent } from 'features/currentSlice'
import { throwToast, removeConfirmation } from 'utils/throwToast'

import FavEditDel from 'components/common/FavEditDel'
import Votes from 'components/common/VoteCount'
import Image from 'components/common/Image'
import * as S from 'components/styled/common/AccordionTable.styled'
import Icon, { IconTypes } from 'components/common/Icon'

const TvEventRow = props => {
  const [isActive, setIsActive] = useState(false)
  const dispatch = useDispatch()
  const current = useSelector(state => state.current.current)
  const [deleteChannel] = useDeleteChannelMutation()
  const [deleteLink] = useDeleteLinkMutation()

  const handleDelete = id => {
    const promise = deleteChannel(id).unwrap()
    throwToast(promise, 'Deleting channel!', 'Channel deleted!')
  }

  const handleDeleteLink = id => {
    const promise = deleteLink(id).unwrap()
    throwToast(promise, 'Deleting link!', 'Link deleted!')
  }

  return (
    <>
      <S.Row isActive={isActive}>
        <S.Cell>
          <S.Status color='#4db500' />
        </S.Cell>
        <S.Cell onClick={() => props.links && setIsActive(!isActive)}>
          <Image src={props.logo} />
          {props.name}
        </S.Cell>
        <S.Cell>{props.country.name}</S.Cell>
        <S.Cell>0</S.Cell>
        <S.Cell>{props.author}</S.Cell>
        <S.Cell>{formatDate(props.created_at)}</S.Cell>
        <S.Cell>
          <FavEditDel
            edit={() => dispatch(setCurrent(props))}
            remove={() => removeConfirmation(() => handleDelete(props.id))}
          />
        </S.Cell>
      </S.Row>
      {isActive &&
        props.links?.map((link, i) => (
          <S.AccordionRow key={link.id}>
            <S.Cell>{i + 1}.</S.Cell>
            <S.Cell>Link {i + 1}</S.Cell>
            <S.Cell>
              <a href={link.url} target='_blank' rel='noopener noreferrer'>
                Open <Icon type={IconTypes.newTab} />
              </a>
              <Votes upVotes={15} downVotes={3} />
            </S.Cell>
            <S.Cell>0</S.Cell>
            <S.Cell>{props.language.name}</S.Cell>
            <S.Cell>{link.quality}</S.Cell>
            <S.Cell>
              <FavEditDel
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

export default TvEventRow
