import styled, { css } from 'styled-components'

export const Navbar = styled.div`
  width: 180px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border-right: 4px solid ${({ theme }) => theme.clrGray};

  a {
    font-size: 14px;
  }
`

export const Logo = styled.div`
  height: 4.5rem;
  display: flex;
  align-items: center;
  border-bottom: ${({ theme }) => theme.borderGray};
  padding-left: 1.5rem;

  svg {
    width: 70px;
  }
`
export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;

  hr {
    background-color: ${({ theme }) => theme.clrGray};
    border: 0;
    height: 1px;
  }

  &:last-of-type {
    margin-top: auto;
  }
`

export const NavItem = styled.li`
  display: flex;

  ${props =>
    props.notification &&
    css`
      a {
        ::after {
          content: '';
          position: absolute;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: red;
          top: 0;
          right: -10px;
        }
      }
    `};

  a {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    transition: color 150ms linear;
    position: relative;

    svg {
      width: 20px;
    }

    &:hover {
      color: ${({ theme }) => theme.clrOrange};
    }
  }

  :last-of-type {
    a {
      svg {
        color: ${({ theme }) => theme.clrError};
      }
    }
  }
`

export const LogoutBtn = styled.button`
  height: 44px;
  padding-inline: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  border: ${({ theme }) => theme.borderGray};
  background-color: transparent;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  margin-inline: 1.5rem;

  &:hover {
    background-color: ${({ theme }) => theme.clrGray30};
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${({ theme }) => theme.clrError};
  }
`
