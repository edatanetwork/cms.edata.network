import { useEffect, useState } from 'react'

import { useGetDomainsQuery } from 'app/services/domains'

import { Button } from 'components/styled/common/Button.styled'
import Icon, { IconTypes } from 'components/common/Icon'
import {
  StyledNav,
  NavItem
} from 'components/styled/pages/common/Statistics.styled'

const Domains = ({ setDomainId }) => {
  const [selectedDomain, setSelectedDomain] = useState(0)

  const { data: domains, isLoading } = useGetDomainsQuery()

  const handleClick = id => {
    setDomainId(id)
    setSelectedDomain(id)
  }

  useEffect(() => {
    if (!isLoading) {
      setDomainId(domains[0].id)
      setSelectedDomain(domains[0].id)
    }
    // eslint-disable-next-line
  }, [isLoading])

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
          {isLoading ? (
            <li>'Loading!'</li>
          ) : (
            <>
              {domains.map(domain => (
                <NavItem
                  selected={selectedDomain === domain.id}
                  key={domain.id}
                  onClick={() => handleClick(domain.id)}
                >
                  {domain.name}
                </NavItem>
              ))}
            </>
          )}
        </ul>
      </nav>
    </StyledNav>
  )
}

export default Domains
