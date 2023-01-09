import Grid from 'components/styled/common/Grid.styled'
import Topbar from 'layout/Topbar'
import Sidebar from 'layout/Sidebar'
import TrashTable from 'components/design/TrashTable'
import Form from 'components/design/Form'

const TrashPage = () => {
  return (
    <Grid columns='1fr auto'>
      <Grid rows='auto 1fr'>
        <Topbar />
        <TrashTable />
      </Grid>
      <Sidebar title='Post' form='post'>
        <Form />
      </Sidebar>
    </Grid>
  )
}

export default TrashPage
