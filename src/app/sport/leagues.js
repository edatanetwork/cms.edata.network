import { api } from 'app/api'

const leagues = api.injectEndpoints({
  endpoints: builder => ({
    getLeagues: builder.query({
      query: () => ({
        url: `/leagues`
      }),
      providesTags: ['Leagues'],
      transformResponse: res => ({
        leagues: res.data[0],
        pagination: res.data.pagination
      })
    }),
    createLeague: builder.mutation({
      query: body => ({
        url: `/leagues`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Leagues']
    }),
    updateLeague: builder.mutation({
      query: ({ id, body }) => ({
        url: `/leagues/${id}`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Leagues']
    }),
    deleteLeague: builder.mutation({
      query: id => ({
        url: `/leagues/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Leagues']
    })
  })
})

export const {
  useGetLeaguesQuery,
  useCreateLeagueMutation,
  useDeleteLeagueMutation,
  useUpdateLeagueMutation
} = leagues
