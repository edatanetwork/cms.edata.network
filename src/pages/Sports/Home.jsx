import Topbar from 'layout/Topbar'
import Sidebar from 'layout/Sidebar'
import Filterbar from 'components/sports/Filterbar'
import { Grid } from 'components/styled/common/Grid.styled'

const Home = () => {
  return (
    <Grid columns='1fr auto'>
      <Grid rows='auto auto 1fr'>
        <Topbar />
        <Filterbar />
        Home
      </Grid>
      <Sidebar title='Post' form='post'>
        Sidebar
      </Sidebar>
    </Grid>
  )
}

export default Home
