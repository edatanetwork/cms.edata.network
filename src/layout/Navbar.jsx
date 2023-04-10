import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { signout } from 'features/authSlice'
import { useLazyPostsVotesNotificationQuery } from 'features/votes/postVotesApiSlice'
import { useLazyDesignReportNotificationQuery } from 'app/services/reports'
import { useNewPostSubmittedNotificationQuery } from 'features/submitted/postsSubmittedApiSlice'
import { useNewSportSubmittedNotificationQuery } from 'features/submitted/sportsSubmittedApiSlice'

import Icon, { IconTypes } from 'components/common/Icon'

import * as Styled from 'components/styled/layout/Navbar.styled'
import { useEffect } from 'react'

const Navbar = ({ path: to }) => {
  const dispatch = useDispatch()

  let path
  if (to === 'users') {
    path = 'design'
  } else {
    path = to
  }

  const [triggerPostsVotesNotification, { data: postsVotesNotification }] =
    useLazyPostsVotesNotificationQuery()

  const [triggerDesignReportNotification, { data: designReportNotification }] =
    useLazyDesignReportNotificationQuery()

  const { submittedPostNotification } = useNewPostSubmittedNotificationQuery(
    undefined,
    {
      pollingInterval: 300000,
      selectFromResult: data => ({ submittedPostNotification: data.data })
    }
  )

  const { newSportSubmittedNotification } =
    useNewSportSubmittedNotificationQuery(undefined, {
      pollingInterval: 300000,
      selectFromResult: data => ({ newSportSubmittedNotification: data.data })
    })

  useEffect(() => {
    if (path === 'design') {
      triggerPostsVotesNotification()
      triggerDesignReportNotification()
    }
  }, [path])

  const notification = (page, path) => {
    if (path === '/submitted') {
      if (page === 'design') {
        return submittedPostNotification
      }

      if (page === 'sports') {
        return newSportSubmittedNotification
      }
    }
  }

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
              <Icon type={el.icon} />
              {el.label}
            </NavLink>
          </Styled.PrimaryNavItem>
        ))}
      </Styled.PrimaryNav>
      <Styled.SecondaryNav>
        {secondaryNav.map(el => (
          <Styled.SecondaryNavItem
            key={el.path}
            notification={notification(path, el.path)}
          >
            <NavLink
              to={`${path}${el.path}`}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              <Icon type={el.icon} />
              {el.label}
            </NavLink>
          </Styled.SecondaryNavItem>
        ))}
        <Styled.SecondaryNavItem>
          <NavLink
            to='/users'
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            <Icon type={IconTypes.user} />
            Users
          </NavLink>
        </Styled.SecondaryNavItem>
        <hr />
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
    path: '/sports',
    icon: IconTypes.ball
  },
  {
    label: 'TV',
    path: '/tv',
    icon: IconTypes.tv
  },
  {
    label: 'Movies',
    path: '/movies',
    icon: IconTypes.videoCamera
  },
  {
    label: 'Design',
    path: '/design',
    icon: IconTypes.layers
  }
]

const secondaryNav = [
  { label: 'Searched', path: '/searched', icon: IconTypes.search },
  { label: 'Trash', path: '/trash', icon: IconTypes.delete },
  { label: 'Votes', path: '/votes', icon: IconTypes.votes },
  { label: 'Submitted', path: '/submitted', icon: IconTypes.folder },
  { label: 'Reports', path: '/reports', icon: IconTypes.attention },
  {
    label: 'Statistics',
    path: '/statistics?domain=all-domains',
    icon: IconTypes.stats
  },
  { label: 'Settings', path: `/settings/categories`, icon: IconTypes.settings }
]
