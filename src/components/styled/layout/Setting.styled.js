import styled from 'styled-components'

export const SettingsNav = styled.div`
  height: calc(100vh - 4.5rem);
  font-size: 14px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.clrBlack50};
  border-right: ${({ theme }) => theme.borderGray};
`
export const Title = styled.p`
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 2rem;
  border-bottom: ${({ theme }) => theme.borderGray};
`

export const Nav = styled.nav`
  padding: 1rem 3.5rem 1rem 2rem;
`

export const NavList = styled.ul``

export const NavItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`
