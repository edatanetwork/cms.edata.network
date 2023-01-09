import Topbar from 'layout/Topbar'
import Sidebar from 'layout/Sidebar'
import Submitted from 'components/design/Submitted'
import SubmittedForm from 'components/design/SubmittedForm'
import { Grid } from 'components/styled/common/Grid.styled'

const SubmittedPage = () => {
  return (
    <Grid columns='1fr auto'>
      <Grid rows='auto 1fr'>
        <Topbar />
        <Submitted />
      </Grid>
      <Sidebar title='Post' form='post'>
        <SubmittedForm />
      </Sidebar>
    </Grid>
  )
}

export default SubmittedPage
