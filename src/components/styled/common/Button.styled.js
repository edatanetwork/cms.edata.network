import styled, { css } from 'styled-components'

const Default = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  text-transform: uppercase;
  transition: background-color 150ms linear;
`

export const Button = styled(Default)`
  border: 0;
  padding: 0.5rem 0.7rem;
  border-radius: 5px;

  &:hover {
    background-color: #ededed;
  }

  svg {
    width: 20px;
  }
`

export const CircleButton = styled(Default)`
  display: grid;
  place-items: center;
  padding: 8px;
  border: ${({ theme }) => theme.borderGray};
  border-radius: 50%;
  background-color: #fff;

  &:hover {
    background-color: #ededed;
  }

  svg {
    width: 13px;

    ${props =>
      props.isFavourite &&
      css`
        path {
          fill: ${({ theme }) => theme.clrError};
        }
      `}
  }
`

export const RoundButton = styled(Default)`
  font-size: 11px;
  font-weight: 500;
  border: ${({ theme }) => theme.borderGray};

  padding: 8px;
  border-radius: 20px;

  &:hover {
    background-color: #ededed;
  }

  svg {
    width: 13px;
  }
`
