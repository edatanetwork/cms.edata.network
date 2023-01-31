import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { setCurrent } from 'features/currentSlice'
import { formatDate } from 'utils/formatDate'
import { throwToast, removeConfirmation } from 'utils/throwToast'
import { useDeleteFilmMutation } from 'app/services/movie/films'
import { useDeleteLinkMutation } from 'app/services/common/links'

import Image from 'components/common/Image'
import FavEditDel from 'components/common/FavEditDel'
import Votes from 'components/common/VoteCount'
import Icon, { IconTypes } from 'components/common/Icon'
import * as S from 'components/styled/common/AccordionTable.styled'

const MovieEventRow = props => {
  const dispatch = useDispatch()
  const [isActive, setIsActive] = useState(true)

  const [deleteFilm] = useDeleteFilmMutation()
  const [deleteLink] = useDeleteLinkMutation()

  const handleDelete = id => {
    const promise = deleteFilm(id).unwrap()
    throwToast(promise, 'Deleting movie!', 'Movie deleted!')
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
          <Image src={props.logo} alt='movie poster' />
          {props.name}
        </S.Cell>
        <S.Cell>{String(props.genres.map(genre => genre.name))}</S.Cell>
        <S.Cell>{props.duration} min</S.Cell>
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
        props.links.map((link, i) => (
          <S.AccordionRow key={link.id}>
            <S.Cell>{i + 1}.</S.Cell>
            <S.Cell>Link</S.Cell>
            <S.Cell>
              <a href={link.url} target='_blank' rel='noopener noreferrer'>
                Open <Icon type={IconTypes.newTab} />
              </a>
              <Votes upVotes={0} downVotes={0} />
            </S.Cell>
            <S.Cell>0</S.Cell>
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

export default MovieEventRow
