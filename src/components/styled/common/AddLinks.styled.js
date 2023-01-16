import styled, { css } from 'styled-components'

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;

  button {
    align-self: center;
  }
`

export const Link = styled.li``

export const Header = styled.div`
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

export const Fields = styled.fieldset`
  border: 0;
  display: grid;
  gap: 14px;

  ${props =>
    !props.isOpen &&
    css`
      display: none;
    `}
`
