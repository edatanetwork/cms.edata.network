import Topbar from 'layout/Topbar'
import Sidebar from 'layout/Sidebar'
import Grid from 'components/styled/common/Grid.styled'

import TagsTable from 'components/design/settings/TagTable'
import TagForm from 'components/design/settings/TagForm'

const TagsPage = () => {
  return (
    <Grid columns='1fr auto'>
      <Grid rows='auto 1fr'>
        <Topbar />
        <TagsTable />
      </Grid>
      <Sidebar title='Tag' form='tag'>
        <TagForm />
      </Sidebar>
    </Grid>
  )
}

export default TagsPage
