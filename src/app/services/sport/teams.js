import { api } from 'app/api'

const teams = api.injectEndpoints({
  endpoints: builder => ({
    getTeams: builder.query({
      query: params => ({
        url: `/teams`,
        params
      }),
      providesTags: ['Teams'],
      transformResponse: res => ({ teams: res.data })
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
  useLazyGetTeamsQuery,
  useCreateTeamMutation,
  useDeleteTeamMutation,
  useUpdateTeamMutation
} = teams
