import styled from 'styled-components'

export const Field = styled.div`
  label {
    color: ${props =>
      props.error ? props.theme.clrError : 'rgba(0, 0, 0, 0.5)'};
  }

  > div:last-of-type {
    border-color: ${props => (props.error ? props.theme.clrError : '#ebeef1')};
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`

export const Label = styled.label`
  font-size: 13px;
`

export const Error = styled.span`
  font-size: 13px;
  color: ${({ theme }) => theme.clrError};
`

export const Body = styled.div`
  position: relative;
  display: flex;
  border: 1px solid;
  border-radius: 4px;

  & > svg {
    align-self: center;
    margin-right: 1.5rem;
  }

  & > span {
    align-self: center;
    font-size: 9px;
    padding: 5px 8px;
    border: 1px solid ${({ theme }) => theme.clrError};
    border-radius: 3px;
    background-color: ${({ theme }) => theme.clrLightRed};
    color: ${({ theme }) => theme.clrError};
    font-weight: 600;
    margin-left: 0.875rem;
  }

  input[type='checkbox'] {
    height: 100%;
    width: 44px;
    appearance: none;

    &::before,
    &::after {
      position: absolute;
      top: 0;
      right: 0;
      content: '';
      width: 44px;
      height: 100%;
    }

    &::after {
      border-left: 1px solid #ededed;
    }

    &:checked {
      &::before {
        background-repeat: no-repeat;
        background-position: center;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='13.803' viewBox='0 0 17 13.803'%3E%3Cpath id='Path_5782' data-name='Path 5782' d='M749.349,521.558a1.5,1.5,0,0,1-1.034-.413l-4.516-4.3a1.5,1.5,0,1,1,2.068-2.174l3.385,3.22,8.454-9.63a1.5,1.5,0,0,1,2.255,1.979l-9.484,10.8a1.5,1.5,0,0,1-1.06.509Z' transform='translate(-743.333 -507.755)' fill='%2300a031'/%3E%3C/svg%3E%0A");
      }
    }
  }
`

export const Input = styled.input`
  flex-grow: 1;
  width: 100%;
  height: 45px;
  padding-inline: 24px;

  ::placeholder {
    color: ${({ theme }) => theme.clrPlaceholder};
  }

  &:has(input[type='checkbox']) {
    padding-right: 0;
  }
`

export const Textarea = styled.textarea`
  resize: none;
  border: none;
  outline: none;
  padding-block: 0.65rem;
  padding-inline: 24px;
  flex-grow: 1;

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    background: #ededed;
  }

  ::-webkit-scrollbar-thumb {
    background: #ceced8;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`
