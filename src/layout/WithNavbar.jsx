import Navbar from 'layout/Navbar'
import Grid from 'components/styled/common/Grid.styled'

const WithNavbar = ({ children, path }) => {
  return (
    <Grid columns='auto 1fr'>
      <Navbar path={path} />
      {children}
    </Grid>
  )
}

export default WithNavbar
