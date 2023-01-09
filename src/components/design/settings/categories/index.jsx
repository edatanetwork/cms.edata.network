import CategoriesTable from './CategoriesTable'
import SubcategoriesTable from './SubcategoriesTable'
import ApplicationsTable from './ApplicationsTable'

import Grid from 'components/styled/common/Grid.styled'

const Categories = () => {
  return (
    <Grid columns='1fr 1fr 1fr'>
      <CategoriesTable />
      <SubcategoriesTable />
      <ApplicationsTable />
    </Grid>
  )
}

export default Categories
