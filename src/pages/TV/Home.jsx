import Topbar from 'layout/Topbar'
import Sidebar from 'layout/Sidebar'
import Filterbar from 'components/tv/Filterbar'
import TvEventsTable from 'components/tv/home/TvEventsTable'
import TvEventForm from 'components/tv/home/TvEventForm'
import { Grid } from 'components/styled/common/Grid.styled'

const Home = () => {
  return (
    <Grid columns='1fr auto'>
      <Grid rows='auto auto 1fr'>
        <Topbar />
        <Filterbar />
        <TvEventsTable />
      </Grid>
      <Sidebar title='Post' form='tv-event'>
        <TvEventForm />
      </Sidebar>
    </Grid>
  )
}

export default Home
