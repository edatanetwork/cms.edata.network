import styled from 'styled-components'

import Select from 'react-select'

export const Dropdown = styled(Select)`
  flex-grow: 1;

  .select__control {
    min-height: 44px;
    font-size: 13px;
    padding-inline: 24px;

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

  .select__placeholder {
    color: ${({ theme }) => theme.clrPlaceholder};
  }

  .select__indicator {
    color: ${({ theme }) => theme.clrBlack30};
  }

  .select__menu {
    border: 1px solid #ebeef1;
    font-size: 13px;
    background-color: #fff;
    margin-top: 4px;
    border-radius: 4px;
  }

  .select__menu-list {
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

  .select__value-container--is-multi {
    padding-block: 0.5rem;
    gap: 8px;
  }

  .select__multi-value {
    background-color: ${({ theme }) => theme.clrGray};
    padding-inline: 8px;
    border-radius: 2px;
    padding-block: 4px;
  }

  .select__multi-value__label {
    margin-right: 2px;
  }

  .select__multi-value__remove {
    padding: 2px;
    transition: background-color ease 150ms;
    border-radius: 4px;

    svg {
      color: ${({ theme }) => theme.clrError};
      transition: color ease 150ms;
    }

    :hover {
      background-color: red;

      svg {
        color: #fff;
      }
    }
  }
`
