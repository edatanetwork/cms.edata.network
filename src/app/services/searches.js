import { api } from 'app/api'

const searches = api.injectEndpoints({
  endpoints: builder => ({
    getSearched: builder.query({
      query: params => ({
        url: '/searches',
        params
      }),
      transformResponse: response => ({
        searched: response.data[0],
        pagination: response.data.pagination
      })
    })
  })
})

export const { useGetSearchedQuery } = searches
