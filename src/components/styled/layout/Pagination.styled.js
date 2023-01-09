import styled from 'styled-components'

export const Pagination = styled.div`
  height: 3rem;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr auto 1fr;
  padding-inline: 2rem;
  border-top: ${({ theme }) => theme.borderGray};
  font-size: 12px;

  div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 1rem;

    svg {
      width: 10px;
    }

    button {
      display: grid;
      place-content: center;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 0;
      background-color: transparent;
      transition: all 150ms ease-in-out;
      border: ${({ theme }) => theme.borderGray};

      &:not(:disabled):hover {
        background-color: #f2f2f2;
      }

      &:disabled {
        opacity: 0.5;
      }
    }

    button:first-of-type {
      svg {
        margin-left: -2px;
        transform: rotate(-90deg);
      }
    }

    button:last-of-type {
      svg {
        transform: rotate(90deg);
      }
    }
  }

  div:nth-child(3) {
    display: flex;
    justify-content: flex-end;

    fieldset {
      border: 0;

      input {
        width: 40px;
        height: 25px;
        text-align: center;
        border: ${({ theme }) => theme.borderGray};
        border-radius: 4px;
        margin-right: 1rem;
      }

      &:first-of-type {
        label {
          margin-right: 2rem;
        }
      }
    }
  }
`
