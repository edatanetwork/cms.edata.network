import { api } from 'app/api'

const linkVotes = api.injectEndpoints({
  endpoints: builder => ({
    getVotesLink: builder.query({
      query: params => ({
        url: '/link-votes',
        params
      }),
      transformResponse: response => ({
        votes: response.data[0],
        pagination: response.data.pagination
      }),
      providesTags: ['Link-Votes']
    }),
    deleteVoteLink: builder.mutation({
      query: id => ({
        url: `/link-votes/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Link-Votes']
    }),
    seenVoteLink: builder.mutation({
      query: id => ({
        url: `/link-votes/seen/${id}`,
        method: 'POST'
      }),
      invalidatesTags: ['Link-Votes']
    })
  })
})

export const {
  useGetVotesLinkQuery,
  useDeleteVoteLinkMutation,
  useSeenVoteLinkMutation
} = linkVotes
