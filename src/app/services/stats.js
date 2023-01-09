import { api } from 'app/api'

const stats = api.injectEndpoints({
  endpoints: builder => ({
    getStats: builder.query({
      query: ({ id, params }) => ({
        url: `/statistics/${id}`,
        params
      }),
      transformResponse: response => response.data
    }),
    downloadPdf: builder.mutation({
      query: ({ id, body }) => ({
        url: `/statistics/${id}/download`,
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetStatsQuery, useDownloadPdfMutation } = stats
