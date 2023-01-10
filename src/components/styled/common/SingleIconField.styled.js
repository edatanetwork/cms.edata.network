import styled from 'styled-components'

export const Label = styled.p`
  font-size: 12px;
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.clrBlack50};
`

export const Preview = styled.div`
  position: relative;
  display: grid;
  place-content: center;
  border: 2px dashed ${({ theme }) => theme.clrGray};
  border-radius: 4px;
  padding-block: 1.25rem;

  img {
    width: 100px;
  }
`

export const Field = styled.div`
  border: 2px dashed ${({ theme }) => theme.clrGray};
  border-radius: 4px;
  cursor: pointer;
`

export const Placeholder = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.clrBlack50};
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  height: 60px;

  svg {
    width: 20px;
  }
`
