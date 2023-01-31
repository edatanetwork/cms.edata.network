import { useSearchParams } from 'react-router-dom'

import { useGetDomainsQuery } from 'app/services/common/domains'

import { Button } from 'components/styled/common/Button.styled'
import Icon, { IconTypes } from 'components/common/Icon'
import {
  StyledNav,
  NavItem
} from 'components/styled/pages/common/Statistics.styled'

const Domains = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const { data: domains, isLoading } = useGetDomainsQuery({ type: 'posts' })

  const handleClick = id => {
    setSearchParams({ domain: id })
  }

  return (
    <StyledNav>
      <div>
        <Button>
          <Icon type={IconTypes.menu} />
          Statistics
        </Button>
      </div>
      <nav>
        <ul>
          <NavItem
            onClick={() => handleClick('all-domains')}
            selected={searchParams.get('domain') === 'all-domains'}
          >
            All Domains
          </NavItem>
          {isLoading ? (
            <li>
              <Icon type={IconTypes.loading} />
            </li>
          ) : (
            domains.map(domain => (
              <NavItem
                key={domain.id}
                onClick={() => handleClick(domain.id)}
                selected={parseInt(searchParams.get('domain')) === domain.id}
              >
                {domain.name}
              </NavItem>
            ))
          )}
        </ul>
      </nav>
    </StyledNav>
  )
}

export default Domains
