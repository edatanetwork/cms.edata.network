import { Grid } from 'components/styled/common/Grid.styled'
import GenreTable from 'components/movies/settings/categories/GenreTable'
import CountriesTable from 'components/movies/settings/categories/CountriesTable'
import LanguagesTable from 'components/common/settings/LanguagesTable'

const Categories = () => {
  return (
    <Grid columns='repeat(3, 1fr)'>
      <GenreTable />
      <CountriesTable />
      <LanguagesTable to='movies' />
    </Grid>
  )
}

export default Categories
