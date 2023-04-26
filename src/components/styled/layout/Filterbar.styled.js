import styled from 'styled-components'

import Select from 'react-select'

export const Filterbar = styled.div`
  height: 4rem;
  display: flex;
  border-bottom: ${({ theme }) => theme.borderGray};
  display: grid;
  grid-template-columns: ${props => props.columns && props.columns};

  & > div:has(input[type='date']) {
    display: flex;
    align-items: center;
    padding: 0 1rem;

    input {
      flex-grow: 1;
    }
  }

  > :not(:last-child) {
    border-right: ${({ theme }) => theme.borderGray};
  }
`
export const Dropdown = styled(Select)`
  display: flex;
  align-items: center;
  width: 100%;

  .select__control {
    flex-grow: 1;
    font-size: 14px;
    padding-inline: 2rem;

    img {
      height: 15px;
    }
  }

  .select__single-value {
    display: flex;
    gap: 4px;

    div {
      width: 20px;
      height: 20px;
      display: grid;
      place-content: center;

      img {
        display: grid;
      }
    }
  }

  .select__menu {
    border: 1px solid #ebeef1;
    font-size: 13px;
    background-color: #fff;
    margin-top: 4px;
    box-shadow: 1px 5px 20px -5px rgba(0, 0, 0, 0.5);
  }

  .select__menu-list {
    padding-block: 0.5rem;

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
  }

  .select__option {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 4px 24px;

    div {
      width: 20px;
      height: 20px;
      display: grid;
      place-content: center;

      img {
        display: grid;
        height: 15px;
      }
    }

    &:hover {
      background-color: #ebeef1;
    }
  }
`
