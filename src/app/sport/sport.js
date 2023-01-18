import { api } from 'app/api'

const sport = api.injectEndpoints({
  endpoints: builder => ({
    getSports: builder.query({
      query: () => ({
        url: `/sports`
      }),
      providesTags: ['Sports'],
      transformResponse: res => ({ sports: res.data })
    }),
    createSport: builder.mutation({
      query: body => ({
        url: `/sports`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Sports']
    }),
    updateSport: builder.mutation({
      query: ({ id, body }) => ({
        url: `/sports/${id}`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Sports']
    }),
    deleteSport: builder.mutation({
      query: id => ({
        url: `/sports/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Sports']
    })
  })
})

export const {
  useGetSportsQuery,
  useCreateSportMutation,
  useUpdateSportMutation,
  useDeleteSportMutation
} = sport
