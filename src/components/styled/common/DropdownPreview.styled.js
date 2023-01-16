import styled from 'styled-components'
import Select from 'react-select'

export const DrodownPreview = styled.div`
  flex-grow: 1;
`

export const Dropdown = styled(Select)`
  .select__control {
    height: 44px;
    font-size: 13px;
    padding-inline: 1rem;

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
    color: ${({ theme }) => theme.clrBlack50};
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
    padding: 4px 1rem;

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

export const Preview = styled.div`
  border-top: 1px solid #ebeef1;
  display: grid;
  place-content: center;
  min-height: 135px;

  img {
    display: flex;
    height: 75px;
  }

  svg {
    width: 50px;
    height: auto;
    opacity: 0.1;
  }
`
