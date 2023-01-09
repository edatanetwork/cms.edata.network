import Grid from 'components/styled/common/Grid.styled'
import Topbar from 'layout/Topbar'
import Sidebar from 'layout/Sidebar'
import Form from 'components/design/Form'
import Votes from 'components/design/Votes'

const VotesPage = () => {
  return (
    <Grid columns='1fr auto'>
      <Grid rows='auto 1fr'>
        <Topbar />
        <Votes />
      </Grid>
      <Sidebar title='Post' form='post'>
        <Form />
      </Sidebar>
    </Grid>
  )
}

export default VotesPage
