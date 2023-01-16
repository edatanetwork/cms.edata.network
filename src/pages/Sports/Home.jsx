import Topbar from 'layout/Topbar'
import Sidebar from 'layout/Sidebar'
import Filterbar from 'components/sports/Filterbar'
import SportEventsTable from 'components/sports/home/SportEventsTable'
import SportEventForm from 'components/sports/home/SportEventForm'
import { Grid } from 'components/styled/common/Grid.styled'

const Home = () => {
  return (
    <Grid columns='1fr auto'>
      <Grid rows='auto auto 1fr'>
        <Topbar />
        <Filterbar />
        <SportEventsTable />
      </Grid>
      <Sidebar title='Post' form='sport-event'>
        <SportEventForm />
      </Sidebar>
    </Grid>
  )
}

export default Home
