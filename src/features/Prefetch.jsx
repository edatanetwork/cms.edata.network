import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { store } from 'app/store'
import { usersApiSlice } from 'features/users/usersApiSlice'
import { submittedPostsApiSlice } from './submitted/postsSubmittedApiSlice'

import postVotesApiSlice from 'features/votes/postVotesApiSlice'

import sportsSubmittedApiSlice from 'features/submitted/sportsSubmittedApiSlice'
import moviesSubmittedApiSlice from 'features/submitted/moviesSubmittedApiSlice'
import channelsSubmittedApiSlice from 'features/submitted/channelsSubmittedApiSlice'

const Prefetch = () => {
  useEffect(() => {
    const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate())

    const newPostSubmittedNotification = store.dispatch(
      submittedPostsApiSlice.endpoints.newPostSubmittedNotification.initiate()
    )
    const newPostVotedNotification = store.dispatch(
      postVotesApiSlice.endpoints.postsVotesNotification.initiate()
    )

    const newSportSubmittedNotification = store.dispatch(
      sportsSubmittedApiSlice.endpoints.newSportSubmittedNotification.initiate()
    )
    const newMovieSubmittedNotification = store.dispatch(
      moviesSubmittedApiSlice.endpoints.newMovieSubmittedNotification.initiate()
    )
    const newChannelSubmittedNotification = store.dispatch(
      channelsSubmittedApiSlice.endpoints.newChannelSubmittedNotification.initiate()
    )

    return () => {
      users.unsubscribe()

      newPostVotedNotification.unsubscribe()

      newPostSubmittedNotification.unsubscribe()
      newSportSubmittedNotification.unsubscribe()
      newMovieSubmittedNotification.unsubscribe()
      newChannelSubmittedNotification.unsubscribe()
    }
  })

  return <Outlet />
}

export default Prefetch
