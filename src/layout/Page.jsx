import Topbar from 'layout/Topbar'
import Sidebar from 'layout/Sidebar'

import { Grid } from 'components/styled/common/Grid.styled'

const SubmittedPage = ({ table, form, sidebarTitle, formId }) => {
  return (
    <Grid columns='1fr auto'>
      <Grid rows='auto 1fr'>
        <Topbar />
        {table}
      </Grid>
      <Sidebar title={sidebarTitle} form={formId}>
        {form}
      </Sidebar>
    </Grid>
  )
}

export default SubmittedPage
