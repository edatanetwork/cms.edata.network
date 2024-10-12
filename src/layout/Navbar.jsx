import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { signout } from 'features/authSlice'

import Icon, { IconTypes } from 'components/common/Icon'
import * as Styled from 'components/styled/layout/Navbar.styled'

import SectionDropdown from 'components/common/SectionDropdown'

const Navbar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(signout())
    navigate('/')
  }

  return (
    <Styled.Navbar>
      <Styled.Logo>
        <Icon type={IconTypes.logoText} />
      </Styled.Logo>
      <SectionDropdown />
      <Styled.NavList>
        {topLinks.map(link => (
          <Styled.NavItem key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              <Icon type={link.icon} />
              {link.label}
            </NavLink>
          </Styled.NavItem>
        ))}
      </Styled.NavList>
      <Styled.NavList>
        {bottomLinks.map(link => (
          <Styled.NavItem key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              <Icon type={link.icon} />
              {link.label}
            </NavLink>
          </Styled.NavItem>
        ))}
      </Styled.NavList>
      <Styled.LogoutBtn onClick={handleLogout}>
        Sign Out
        <Icon type={IconTypes.off} />
      </Styled.LogoutBtn>
    </Styled.Navbar>
  )
}

export default Navbar

const topLinks = [
  { label: 'Posts', path: '/posts', icon: IconTypes.add },
  { label: 'Categories', path: '/categories', icon: IconTypes.columns },
  { label: 'Searched', path: '/searched', icon: IconTypes.search },
  { label: 'Trash', path: '/trash', icon: IconTypes.trash },
  { label: 'Votes', path: '/votes', icon: IconTypes.votes },
  { label: 'Submitted', path: '/submitted', icon: IconTypes.folder },
  { label: 'Reports', path: '/reports', icon: IconTypes.warning }
]

const bottomLinks = [
  { label: 'Tags', path: '/tags', icon: IconTypes.label },
  { label: 'Resources', path: '/resources', icon: IconTypes.arrowCircle },
  { label: 'Domains', path: '/domains', icon: IconTypes.globe },
  { label: 'Users', path: '/users', icon: IconTypes.accountCircle },
  { label: 'Moderators', path: '/moderators', icon: IconTypes.lockClosed },
  { label: 'Subscribers', path: '/subscribers', icon: IconTypes.at },
  { label: 'Ads', path: '/ads', icon: IconTypes.refresh },
  {
    label: 'Statistics',
    path: '/statistics?domain=all-domains',
    icon: IconTypes.stats
  }
]
