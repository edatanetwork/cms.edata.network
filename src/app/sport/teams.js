import { api } from 'app/api'

const teams = api.injectEndpoints({
  endpoints: builder => ({
    getTeams: builder.query({
      query: () => ({
        url: `/teams`
      }),
      providesTags: ['Teams'],
      transformResponse: res => ({
        teams: res.data[0],
        pagination: res.data.pagination
      })
    }),
    createTeam: builder.mutation({
      query: body => ({
        url: `/teams`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Teams']
    }),
    updateTeam: builder.mutation({
      query: ({ id, body }) => ({
        url: `/teams/${id}`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Teams']
    }),
    deleteTeam: builder.mutation({
      query: id => ({
        url: `/teams/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['LeaTeamsgues']
    })
  })
})

export const {
  useGetTeamsQuery,
  useCreateTeamMutation,
  useDeleteTeamMutation,
  useUpdateTeamMutation
} = teams
