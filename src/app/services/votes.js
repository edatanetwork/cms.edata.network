import { api } from 'app/api'

const votes = api.injectEndpoints({
  endpoints: builder => ({
    getVotes: builder.query({
      query: params => ({
        url: '/votes',
        params
      }),
      transformResponse: response => ({
        votes: response.data[0],
        pagination: response.data.pagination
      }),
      providesTags: ['Votes']
    }),
    deleteVote: builder.mutation({
      query: id => ({
        url: `/votes/delete/${id}`,
        method: 'POST'
      }),
      invalidatesTags: ['Votes']
    }),
    seenVote: builder.mutation({
      query: id => ({
        url: `votes/seen/${id}`,
        method: 'POST'
      }),
      invalidatesTags: ['Votes']
    }),
    designVotesNotification: builder.query({
      query: () => ({
        url: '/votes/seen-check'
      }),
      transformResponse: response => response.data
    })
  })
})

export const {
  useGetVotesQuery,
  useDeleteVoteMutation,
  useSeenVoteMutation,
  useLazyDesignVotesNotificationQuery
} = votes
