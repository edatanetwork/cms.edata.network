import { useNewPostSubmittedNotificationQuery } from 'features/submitted/postsSubmittedApiSlice'
import { usePostsVotesNotificationQuery } from 'features/votes/postVotesApiSlice'
import { usePostReportNotificationQuery } from 'app/services/reports'

import { useNewSportSubmittedNotificationQuery } from 'features/submitted/sportsSubmittedApiSlice'
import { useNewMovieSubmittedNotificationQuery } from 'features/submitted/moviesSubmittedApiSlice'
import { useNewChannelSubmittedNotificationQuery } from 'features/submitted/channelsSubmittedApiSlice'

const extraOptions = option => ({
  pollingInterval: 300000,
  selectFromResult: data => ({ [option]: data.data })
})

export const useNotifications = () => {
  const { submittedPostNotification } = useNewPostSubmittedNotificationQuery(
    undefined,
    extraOptions('submittedPostNotification')
  )
  const { newPostVoteNotification } = usePostsVotesNotificationQuery(
    undefined,
    extraOptions('newPostVoteNotification')
  )

  const { newPostReportNotification } = usePostReportNotificationQuery(
    undefined,
    extraOptions('newPostReportNotification')
  )

  const { newSportSubmittedNotification } =
    useNewSportSubmittedNotificationQuery(
      undefined,
      extraOptions('newSportSubmittedNotification')
    )

  const { newMovieSubmittedNotification } =
    useNewMovieSubmittedNotificationQuery(
      undefined,
      extraOptions('newMovieSubmittedNotification')
    )

  const { newChannelSubmittedNotification } =
    useNewChannelSubmittedNotificationQuery(
      undefined,
      extraOptions('newChannelSubmittedNotification')
    )

  const getNotificationStatus = (page, path) => {
    if (path === '/submitted') {
      if (page === 'design') return submittedPostNotification
      if (page === 'sports') return newSportSubmittedNotification
      if (page === 'movies') return newMovieSubmittedNotification
      if (page === 'tv') return newChannelSubmittedNotification
    }

    if (path === '/reports') {
      if (page === 'design') return newPostReportNotification
    }

    if (path === '/votes') {
      if (page === 'design') return newPostVoteNotification
    }
  }

  return [getNotificationStatus]
}
