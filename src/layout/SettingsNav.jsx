import capitalize from 'lodash.capitalize'

import * as Styled from 'components/styled/layout/Setting.styled'

import Link from 'components/common/Link'

const SettingsNav = ({ to, paths }) => {
  const regex = /\w+/g
  const links = paths
    .map(child => child.props.path)
    .map(path => path.match(regex))
    .flat()
    .map(link => ({ path: link, label: capitalize(link) }))

  return (
    <Styled.SettingsNav>
      <Styled.Title>Settings</Styled.Title>
      <Styled.Nav>
        <Styled.NavList>
          {links.map(link => (
            <Styled.NavItem key={link.label}>
              <Link to={`${to}/settings/${link.path}`} label={link.label} />
            </Styled.NavItem>
          ))}
        </Styled.NavList>
      </Styled.Nav>
    </Styled.SettingsNav>
  )
}

export default SettingsNav
