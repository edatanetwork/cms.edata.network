import Topbar from 'layout/Topbar'
import Sidebar from 'layout/Sidebar'
import Reports from 'components/design/Reports'
import ReportForm from 'components/design/ReportForm'

import { Grid } from 'components/styled/common/Grid.styled'

const ReportsPage = () => {
  return (
    <Grid columns='1fr auto'>
      <Grid rows='auto 1fr'>
        <Topbar />
        <Reports />
      </Grid>
      <Sidebar title='Post' form='post'>
        <ReportForm />
      </Sidebar>
    </Grid>
  )
}

export default ReportsPage
