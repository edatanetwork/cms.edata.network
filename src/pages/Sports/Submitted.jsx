import Topbar from 'layout/Topbar'
import Sidebar from 'layout/Sidebar'

import { Grid } from 'components/styled/common/Grid.styled'

const SubmittedPage = () => {
  return (
    <Grid columns='1fr auto'>
      <Grid rows='auto 1fr'>
        <Topbar />
      </Grid>
      <Sidebar title='Post' form='post'></Sidebar>
    </Grid>
  )
}

export default SubmittedPage
