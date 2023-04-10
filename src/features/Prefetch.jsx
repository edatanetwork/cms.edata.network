import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { store } from 'app/store'
import { usersApiSlice } from 'features/users/usersApiSlice'
import { submittedPostsApiSlice } from './submitted/postsSubmittedApiSlice'

import sportsSubmittedApiSlice from 'features/submitted/sportsSubmittedApiSlice'
import moviesSubmittedApiSlice from 'features/submitted/moviesSubmittedApiSlice'
import channelsSubmittedApiSlice from 'features/submitted/channelsSubmittedApiSlice'

const Prefetch = () => {
  useEffect(() => {
    const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())
    const newPostSubmittedNotification = store.dispatch(
      submittedPostsApiSlice.endpoints.newPostSubmittedNotification.initiate()
    )
    const newSportSubmittedNotification = store.dispatch(
      sportsSubmittedApiSlice.endpoints.newSportSubmittedNotification.initiate()
    )

    return () => {
      users.unsubscribe()
      newPostSubmittedNotification.unsubscribe()
      // newSportSubmittedNotification.reset()
    }
  })

  return <Outlet />
}

export default Prefetch
