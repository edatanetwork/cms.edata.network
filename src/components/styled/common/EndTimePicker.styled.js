import styled from 'styled-components'

export const EndTimePicker = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  border: 1px solid #ebeef1;

  input[type='radio'] {
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

    :nth-of-type(9) {
      ::after {
        border-bottom-left-radius: 4px;
      }
    }

    :nth-of-type(-n + 7) {
      ::after {
        border-right: 1px solid #ebeef1;
      }
    }

    :nth-of-type(-n + 8) {
      ::after {
        border-bottom: 1px solid #ebeef1;
      }
    }

    :nth-last-of-type(-n + 7) {
      ::after {
        border-right: 1px solid #ebeef1;
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
    }

    &:checked {
      &::after {
        font-weight: 600;
        background-color: #ebeef1;
        color: #00a066;
      }
    }
  }

  input[type='number'] {
    grid-column: 7 / 9;
    height: 47px;
    font-size: 13px;
    text-align: center;
    border-bottom-right-radius: 4px;
  }
`
