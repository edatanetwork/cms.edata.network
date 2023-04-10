import { api } from 'app/api'

const sportsSubmittedApiSlice = api.injectEndpoints({
  endpoints: builder => ({
    getSubmittedSports: builder.query({
      query: params => ({
        url: '/sport-event-submitted',
        params
      }),
      transformResponse: res => ({
        submitted: res.data[0],
        pagination: res.data.pagination
      }),
      providesTags: res => [
        { type: 'Submitted-Sports', id: 'LIST' },
        ...res.submitted.map(item => ({
          type: 'Submitted-Sports',
          id: item.id
        }))
      ]
    }),
    markSeenSubmittedSport: builder.mutation({
      query: ({ id }) => ({
        url: `/sport-event-submitted/seen/${id}`,
        method: 'POST'
      }),
      invalidatesTags: (_res, _err, args) => [
        { type: 'Submitted-Sports', id: args.id },
        { type: 'Submitted-Sports', id: 'NOTIFICATION' }
      ]
    }),
    newSportSubmittedNotification: builder.mutation({
      query: () => ({
        url: '/sport-event-submitted/seen-check'
      }),
      transformResponse: response => response.data,
      providesTags: [{ type: 'Submitted-Sports', id: 'NOTIFICATION' }]
    })
  })
})

export const {
  useGetSubmittedSportsQuery,
  useMarkSeenSubmittedSportMutation,
  useNewSportSubmittedNotificationMutation
} = sportsSubmittedApiSlice
