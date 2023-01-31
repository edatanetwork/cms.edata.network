import styled, { css } from 'styled-components'

export const StyledNav = styled.div`
  border-right: ${({ theme }) => theme.borderGray};

  div {
    height: 4.5rem;
    display: grid;
    place-items: center;
    border-bottom: ${({ theme }) => theme.borderGray};

    button {
      position: relative;
      left: -2.3rem;
    }

    svg {
      width: 20px;
    }
  }

  nav {
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

    height: calc(100vh - 4.5rem);
    overflow-y: auto;
    min-width: 250px;

    ul {
      list-style: none;

      li {
        svg {
          margin-left: 2rem;
          margin-block: 1.5rem;
        }
      }
    }
  }
`

export const NavItem = styled.li`
  position: relative;
  padding: 1rem 5rem 1rem 2rem;
  cursor: pointer;
  font-size: 13px;
  border-bottom: ${({ theme }) => theme.borderGray};

  ${props =>
    props.selected &&
    css`
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        width: 3px;
        height: 70%;
        background-color: #ff7f00;
      }
    `}
`
