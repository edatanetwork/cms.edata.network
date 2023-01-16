import { useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

import Input from './Input'
import Dropdown from './Dropdown'

import styled, { css } from 'styled-components'

import Icon, { IconTypes } from '../Icon'

const Links = () => {
  const [isOpen, setIsOpen] = useState(false)

  const { control } = useFormContext()
  const { fields, append, remove } = useFieldArray({ control, name: 'links' })

  return (
    <ul>
      {/* {fields.map((field, index) => ())} */}
      <li>
        <Header isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          Link <Icon type={IconTypes.chevronUp} />
        </Header>
        <Fields isOpen={isOpen}>
          <Input label='Livestream Link' name='livestreamLink' />
          <Dropdown label='Language' name='language_id' />
          <Dropdown label='Channel Name' name='channel_id' />
          <Dropdown label='Quality' name='quality' />
        </Fields>
      </li>
    </ul>
  )
}

export default Links

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.clrBlack50};
  background-color: ${({ theme }) => theme.clrGray};
  border-radius: 4px;
  text-transform: uppercase;
  font-size: 14px;
  height: 50px;
  padding-inline: 1.5rem;
  cursor: pointer;
  margin-bottom: 14px;

  ${props =>
    !props.isOpen &&
    css`
      svg {
        transform: scaleY(-1);
      }
    `}

  svg {
    width: 12px;
    transition: transform 150ms linear;
  }
`

const Fields = styled.fieldset`
  border: 0;
  display: grid;
  gap: 14px;

  ${props =>
    !props.isOpen &&
    css`
      display: none;
    `}
`
