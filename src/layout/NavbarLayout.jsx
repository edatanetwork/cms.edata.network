import { Outlet, useLocation } from 'react-router-dom'

import Navbar from 'layout/Navbar'
import { Grid } from 'components/styled/common/Grid.styled'

const NavbarLayout = () => {
  const { pathname } = useLocation()

  return (
    <Grid columns='auto 1fr'>
      <Navbar path={pathname.split('/')[1]} />
      <Outlet />
    </Grid>
  )
}

export default NavbarLayout
