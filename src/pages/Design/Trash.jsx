import Grid from 'components/styled/common/Grid.styled'
import Topbar from 'layout/Topbar'
import Sidebar from 'layout/Sidebar'
import Form from 'components/design/Form'

import TrashTable from 'features/trash/PostsTrash'

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
