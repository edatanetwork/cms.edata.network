import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { signout } from 'features/authSlice'

import Icon, { IconTypes } from 'components/common/Icon'

import * as Styled from 'components/styled/layout/Navbar.styled'

const Navbar = ({ path }) => {
  const dispatch = useDispatch()

  return (
    <Styled.Navbar>
      <Styled.Logo>
        <Icon type={IconTypes.logoText} />
      </Styled.Logo>
      <Styled.PrimaryNav>
        {primaryNav.map(el => (
          <Styled.PrimaryNavItem key={el.path}>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              to={el.path}
            >
              {el.label}
            </NavLink>
          </Styled.PrimaryNavItem>
        ))}
      </Styled.PrimaryNav>
      <Styled.SecondaryNav>
        {secondaryNav.map(el => (
          <Styled.SecondaryNavItem key={el.path}>
            <NavLink
              to={`${path}${el.path}`}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              <Icon type={el.icon} />
              {el.label}
            </NavLink>
          </Styled.SecondaryNavItem>
        ))}
        <Styled.SecondaryNavItem onClick={() => dispatch(signout())}>
          <NavLink to='/'>
            <Icon type={IconTypes.off} />
            Sign Out
          </NavLink>
        </Styled.SecondaryNavItem>
      </Styled.SecondaryNav>
    </Styled.Navbar>
  )
}

export default Navbar

const primaryNav = [
  {
    label: 'Sports',
    path: '/sports'
  },
  {
    label: 'TV',
    path: '/tv'
  },
  {
    label: 'Movies',
    path: '/movies'
  },
  {
    label: 'Design',
    path: '/design'
  }
]

const secondaryNav = [
  { label: 'Searched', path: '/searched', icon: IconTypes.search },
  { label: 'Trash', path: '/trash', icon: IconTypes.delete },
  { label: 'Votes', path: '/votes', icon: IconTypes.votes },
  { label: 'Submitted', path: '/submitted', icon: IconTypes.folder },
  { label: 'Reports', path: '/reports', icon: IconTypes.attention },
  { label: 'Statistics', path: '/statistics', icon: IconTypes.stats },
  { label: 'Settings', path: `/settings/categories`, icon: IconTypes.settings }
]
