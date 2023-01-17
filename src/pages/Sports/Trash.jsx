import Topbar from 'layout/Topbar'
import TrashTable from 'components/sports/TrashTable'

import { Grid } from 'components/styled/common/Grid.styled'

const Trash = () => {
  return (
    <Grid columns='1fr auto'>
      <Grid rows='auto 1fr'>
        <Topbar />
        <TrashTable />
      </Grid>
    </Grid>
  )
}

export default Trash
