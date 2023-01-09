import * as Styled from 'components/styled/layout/Setting.styled'

import Link from 'components/common/Link'

const SettingsNav = ({ path }) => {
  return (
    <Styled.SettingsNav>
      <Styled.Title>Settings</Styled.Title>
      <Styled.Nav>
        <Styled.NavList>
          <Styled.NavItem>
            <Link to={`${path}/settings/categories`} label='Categories' />
          </Styled.NavItem>
          <Styled.NavItem>
            <Link to={`${path}/settings/domains`} label='Domains' />
          </Styled.NavItem>
          <Styled.NavItem>
            <Link to={`${path}/settings/tags`} label='Tags' />
          </Styled.NavItem>
          <Styled.NavItem>
            <Link to={`${path}/settings/redirect`} label='Redirect' />
          </Styled.NavItem>
          <Styled.NavItem>
            <Link to={`${path}/settings/ads`} label='Ads' />
          </Styled.NavItem>
        </Styled.NavList>
      </Styled.Nav>
    </Styled.SettingsNav>
  )
}

export default SettingsNav
