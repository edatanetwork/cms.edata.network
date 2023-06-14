import { api } from 'app/api'

const matches = api.injectEndpoints({
  endpoints: builder => ({
    getMatches: builder.query({
      query: () => ({
        url: '/sport-events'
      }),
      transformResponse: response => ({
        matches: response.data[0],
        pagination: response.data.pagination
      }),
      providesTags: ['Matches']
    }),
    createMatch: builder.mutation({
      query: body => ({
        url: '/sport-events',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Matches']
    }),
    updateMatch: builder.mutation({
      query: ({ id, body }) => ({
        url: `/sport-events/${id}`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Matches']
    }),
    deleteMatch: builder.mutation({
      query: id => ({
        url: `sport-events/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Matches']
    }),
    favoriteMatch: builder.mutation({
      query: ({ id, favourite }) => ({
        url: `/sport-events/make-favourite/${id}`,
        method: 'POST',
        body: { favourite }
      }),
      invalidatesTags: ['Matches']
    })
  })
})

export const {
  useGetMatchesQuery,
  useCreateMatchMutation,
  useUpdateMatchMutation,
  useDeleteMatchMutation,
  useFavoriteMatchMutation
} = matches
