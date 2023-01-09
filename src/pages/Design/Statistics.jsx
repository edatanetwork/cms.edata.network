import { useState } from 'react'

import { Grid } from 'components/styled/common/Grid.styled'
import Domains from 'components/design/statistics/Domains'
import Reports from 'components/design/statistics/Reports'
import StatsTable from 'components/design/statistics/Statistics'

const StatisticsPage = () => {
  const [domainId, setDomainId] = useState(null)

  return (
    <Grid columns='auto 1fr'>
      <Domains setDomainId={setDomainId} />
      <Grid>
        <Reports domainId={domainId} />
        <StatsTable domainId={domainId} />
      </Grid>
    </Grid>
  )
}

export default StatisticsPage
