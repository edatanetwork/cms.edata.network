import { api } from 'app/api'

const submitted = api.injectEndpoints({
  endpoints: builder => ({
    getSubmitted: builder.query({
      query: params => ({
        url: '/submitted',
        params
      }),
      transformResponse: response => ({
        submitted: response.data[0],
        pagination: response.data.pagination
      }),
      providesTags: ['Submitted']
    }),
    seenSubmitted: builder.mutation({
      query: id => ({
        url: `/submitted/seen/${id}`,
        method: 'POST'
      }),
      invalidatesTags: ['Submitted']
    }),
    designSubmittedNotification: builder.query({
      query: () => ({
        url: '/submitted/seen-check'
      }),
      transformResponse: response => response.data
    })
  })
})

export const {
  useGetSubmittedQuery,
  useSeenSubmittedMutation,
  useLazyDesignSubmittedNotificationQuery
} = submitted
