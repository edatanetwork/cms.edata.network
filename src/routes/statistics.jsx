import { useSearchParams } from 'react-router-dom'

import { useGetStatsQuery } from 'app/services/stats'

import { Grid } from 'components/styled/common/Grid.styled'
import Domains from 'components/design/statistics/Domains'
import Reports from 'components/design/statistics/Reports'
import StatsTable from 'components/design/statistics/Statistics'

const StatisticsPage = () => {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('domain')
  const params = Object.fromEntries(searchParams)
  delete params.domain

  const { data } = useGetStatsQuery({
    id,
    params: {
      [params.filter]: params.filter ? true : undefined,
      by_day: params.by_day
    }
  })

  return (
    <Grid columns='auto 1fr'>
      <Domains />
      <Grid>
        <Reports data={data} />
        <StatsTable data={data} />
      </Grid>
    </Grid>
  )
}

export default StatisticsPage
