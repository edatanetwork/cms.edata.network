import { Outlet, useLocation } from 'react-router-dom'

import Navbar from 'layout/Navbar'
import { Flex } from 'components/styled/common/Flex.styled'

const NavbarLayout = () => {
  const { pathname } = useLocation()

  return (
    <Flex style={{ height: '100vh' }}>
      <Navbar path={pathname.split('/')[1]} />
      <Outlet />
    </Flex>
  )
}

export default NavbarLayout
