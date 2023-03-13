import { api } from 'app/api'

const postVotesApiSlice = api.injectEndpoints({
  endpoints: builder => ({
    getPostsVote: builder.query({
      query: params => ({
        url: '/votes',
        params
      }),
      keepUnusedDataFor: 300,
      transformResponse: response => ({
        votes: response.data[0],
        pagination: response.data.pagination
      }),
      providesTags: res => [
        { type: 'Votes', id: 'Items' },
        ...res.votes.map(id => ({ type: 'Votes', id }))
      ]
    }),
    deletePostVote: builder.mutation({
      query: id => ({
        url: `/votes/delete/${id}`,
        method: 'POST'
      }),
      invalidatesTags: (_res, _err, arg) => [{ type: 'Votes', id: arg.id }]
    }),
    seePostVote: builder.mutation({
      query: id => ({
        url: `votes/seen/${id}`,
        method: 'POST'
      }),
      invalidatesTags: (_res, _err, arg) => [
        { type: 'Votes', id: arg.id },
        { type: 'Votes', id: 'Notification' }
      ]
    }),
    postsVotesNotification: builder.query({
      query: () => ({
        url: '/votes/seen-check'
      }),
      providesTags: [{ type: 'Votes', id: 'Notification' }],
      transformResponse: response => response.data
    })
  })
})

export const {
  useGetPostsVoteQuery,
  useDeletePostVoteMutation,
  useSeePostVoteMutation,
  useLazyPostsVotesNotificationQuery
} = postVotesApiSlice
