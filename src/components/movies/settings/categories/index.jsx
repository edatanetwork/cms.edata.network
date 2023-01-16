import { Grid } from 'components/styled/common/Grid.styled'
import GenreTable from 'components/movies/settings/categories/GenreTable'
import CountriesTable from 'components/common/categories/CountriesTable'
import LanguagesTable from 'components/common/categories/LanguagesTable'

const Categories = () => {
  return (
    <Grid columns='repeat(3, 1fr)'>
      <GenreTable />
      <CountriesTable />
      <LanguagesTable />
    </Grid>
  )
}

export default Categories
