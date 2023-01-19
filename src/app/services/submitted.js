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
    designSubmittedNotification: builder.query({
      query: () => ({
        url: '/submitted/seen-check'
      }),
      transformResponse: response => response.data
    })
  })
})

export const { useGetSubmittedQuery, useLazyDesignSubmittedNotificationQuery } =
  submitted
