import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { store } from 'app/store'
import { usersApiSlice } from 'features/users/usersApiSlice'
import { submittedPostsApiSlice } from './submitted/postsSubmittedApiSlice'

const Prefetch = () => {
  useEffect(() => {
    const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())
    const newPostSubmittedNotification = store.dispatch(
      submittedPostsApiSlice.endpoints.newPostSubmittedNotification.initiate()
    )

    return () => {
      users.unsubscribe()
      newPostSubmittedNotification.unsubscribe()
    }
  })

  return <Outlet />
}

export default Prefetch
