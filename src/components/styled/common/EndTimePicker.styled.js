import styled from 'styled-components'

export const EndTimePicker = styled.div`
  display: grid;
  grid-template-columns: repeat(8, auto);
  gap: 1px;

  input {
    appearance: none;
    margin: 0;
    height: 45px;

    :first-of-type {
      ::after {
        border-top-left-radius: 4px;
      }
    }

    :nth-of-type(8) {
      ::after {
        border-top-right-radius: 4px;
      }
    }

    &::after {
      content: attr(data-text);
      display: grid;
      place-content: center;
      width: 100%;
      height: 100%;
      font-size: 13px;
      color: rgba(0, 0, 0, 0.5);
      transition: all 150ms ease-in-out;
      border: 1px solid #ebeef1;
    }

    &:checked {
      &::after {
        font-weight: 600;
        background-color: #ebeef1;
        color: #00a066;
      }
    }
  }
`
