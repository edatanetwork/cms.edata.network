import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { signout } from 'features/authSlice'
import { useNotifications } from 'hooks/useNotifications'

import Icon, { IconTypes } from 'components/common/Icon'
import * as Styled from 'components/styled/layout/Navbar.styled'

import SectionDropdown from 'components/common/SectionDropdown'

const Navbar = ({ path: to }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [getNotificationStatus] = useNotifications()

  let path
  if (to === 'users') {
    path = 'design'
  } else {
    path = to
  }

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
        {secondaryNav.map(el => (
          <Styled.NavItem
            key={el.path}
            notification={getNotificationStatus(path, el.path)}
          >
            <NavLink
              to={`${path}${el.path}`}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              <Icon type={el.icon} />
              {el.label}
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

const secondaryNav = [
  { label: 'Posts', path: '/', icon: IconTypes.add },
  { label: 'Users', path: '/users', icon: IconTypes.accountCircle },
  { label: 'Authors', path: '/authors', icon: IconTypes.lock },
  { label: 'Subscribers', path: '/subscribers', icon: IconTypes.at },
  { label: 'Searched', path: '/searched', icon: IconTypes.search },
  { label: 'Trash', path: '/trash', icon: IconTypes.trash },
  { label: 'Votes', path: '/votes', icon: IconTypes.votes },
  { label: 'Submitted', path: '/submitted', icon: IconTypes.folder },
  { label: 'Reports', path: '/reports', icon: IconTypes.warning },
  { label: 'Domains', path: '/domains', icon: IconTypes.globe },
  { label: 'Categories', path: '/categories', icon: IconTypes.columns },
  { label: 'Tags', path: '/tags', icon: IconTypes.label },
  { label: 'Resources', path: '/resources', icon: IconTypes.arrowCircle },
  { label: 'Ads', path: '/ads', icon: IconTypes.refresh },
  {
    label: 'Statistics',
    path: '/statistics?domain=all-domains',
    icon: IconTypes.stats
  }
]
