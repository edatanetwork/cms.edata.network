import Topbar from 'layout/Topbar'
import Sidebar from 'layout/Sidebar'
import Filterbar from 'components/movies/Filterbar'
import MovieEventsTable from 'components/movies/home/MoviesEventTable'
import MovieEventForm from 'components/movies/home/MovieEventForm'
import { Grid } from 'components/styled/common/Grid.styled'

const Home = () => {
  return (
    <Grid columns='1fr auto'>
      <Grid rows='auto auto 1fr'>
        <Topbar />
        <Filterbar />
        <MovieEventsTable />
      </Grid>
      <Sidebar title='Post' form='movie-event'>
        <MovieEventForm />
      </Sidebar>
    </Grid>
  )
}

export default Home
