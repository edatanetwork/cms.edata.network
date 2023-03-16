import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { store } from 'app/store'
import { usersApiSlice } from 'features/users/usersApiSlice'

const Prefetch = () => {
  useEffect(() => {
    const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())

    return () => {
      users.unsubscribe()
    }
  })

  return <Outlet />
}

export default Prefetch
