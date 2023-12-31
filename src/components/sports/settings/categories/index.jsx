import { Grid } from 'components/styled/common/Grid.styled'
import SportsTable from 'components/sports/settings/categories/SportsTable'
import CountriesTable from 'components/sports/settings/categories/CountriesTable'
import LanguagesTable from 'components/common/settings/LanguagesTable'
import LeaguesTable from 'components/sports/settings/categories/LeaguesTable'
import TeamsTable from 'components/sports/settings/categories/TeamsTable'

const Categories = () => {
  return (
    <Grid columns='repeat(5, 1fr)'>
      <SportsTable />
      <CountriesTable />
      <LanguagesTable to='sports' />
      <LeaguesTable />
      <TeamsTable />
    </Grid>
  )
}

export default Categories
