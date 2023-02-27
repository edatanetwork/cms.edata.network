import Topbar from 'layout/Topbar'
import Filterbar from 'layout/Filterbar'
import Sidebar from 'layout/Sidebar'
import Posts from 'components/design/Posts'
import Form from 'components/design/Form'

import AddPostForm from 'components/design/AddPostForm'

import Grid from 'components/styled/common/Grid.styled'

const Home = () => {
  return (
    <Grid columns='1fr auto'>
      <Grid rows='auto auto 1fr'>
        <Topbar />
        <Filterbar />
        <Posts />
      </Grid>
      <Sidebar title='Post' form='post'>
        <Form />
      </Sidebar>
    </Grid>
  )
}

export default Home
