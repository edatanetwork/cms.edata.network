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
      div > svg {
        transform: scaleY(-1);
      }
    `}

  svg {
    width: 12px;
    transition: transform 150ms linear;
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border-radius: 20px;
    padding: 0.5rem;
    background-color: white;

    svg {
      height: 15px;
      width: auto;
    }
  }
`

export const Button = styled.button`
  margin-right: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const Fields = styled.fieldset`
  border: 0;
  display: grid;
  gap: 14px;
  padding-top: 1rem;

  ${props =>
    !props.isOpen &&
    css`
      display: none;
    `}
`
