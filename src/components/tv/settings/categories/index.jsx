import { Grid } from 'components/styled/common/Grid.styled'
import GenreTable from 'components/tv/settings/categories/GenreTable'
import CountriesTable from 'components/tv/settings/categories/CountriesTable'
import LanguagesTable from 'components/common/categories/LanguagesTable'

const Categories = () => {
  return (
    <Grid columns='repeat(3, 1fr)'>
      <GenreTable />
      <CountriesTable />
      <LanguagesTable to='tv' />
    </Grid>
  )
}

export default Categories
