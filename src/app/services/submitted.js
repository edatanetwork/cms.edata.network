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
    })
  })
})

export const { useGetSubmittedQuery } = submitted
