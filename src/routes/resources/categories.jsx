import { Outlet } from 'react-router-dom'

import Topbar from 'layout/Topbar'

import ResourcesCategoriesTable from 'features/resources/ResourcesCategoriesTable'
import ResourcesSubcategoriesTable from 'features/resources/ResourcesSubcategoriesTable'
import ResourcesApplicationsTable from 'features/resources/ResourcesApplicationsTable'

import Grid from 'components/styled/common/Grid.styled'

const ResourcesCategoriesPage = () => {
  return (
    <Grid columns='1fr auto'>
      <Grid rows='auto 1fr'>
        <Topbar />
        <Grid columns='1fr 1fr 1fr'>
          <ResourcesCategoriesTable />
          <ResourcesSubcategoriesTable />
          <ResourcesApplicationsTable />
        </Grid>
      </Grid>
      <Outlet />
    </Grid>
  )
}

export default ResourcesCategoriesPage
