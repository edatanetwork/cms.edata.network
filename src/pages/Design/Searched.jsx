import Topbar from 'layout/Topbar'
import Sidebar from 'layout/Sidebar'
import Searched from 'components/design/Searched'
import SearchedForm from 'components/design/SearchedForm'

import { Grid } from 'components/styled/common/Grid.styled'

const SearchedPage = () => {
  return (
    <Grid columns='1fr auto'>
      <Grid rows='auto 1fr'>
        <Topbar />
        <Searched />
      </Grid>
      <Sidebar title='Post'>
        <SearchedForm />
      </Sidebar>
    </Grid>
  )
}

export default SearchedPage
