import Topbar from 'layout/Topbar'
import Sidebar from 'layout/Sidebar'

import { Grid } from 'components/styled/common/Grid.styled'

const SubmittedPage = ({ table, form }) => {
  return (
    <Grid columns='1fr auto'>
      <Grid rows='auto 1fr'>
        <Topbar />
        {table}
      </Grid>
      <Sidebar title='Post' form='post'>
        {form}
      </Sidebar>
    </Grid>
  )
}

export default SubmittedPage
