import Topbar from 'layout/Topbar'

import { Grid } from 'components/styled/common/Grid.styled'

const VotesPage = () => {
  return (
    <Grid columns='1fr auto'>
      <Grid rows='auto 1fr'>
        <Topbar />
      </Grid>
    </Grid>
  )
}

export default VotesPage
