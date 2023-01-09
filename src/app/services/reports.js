import { api } from 'app/api'

const reports = api.injectEndpoints({
  endpoints: builder => ({
    getReports: builder.query({
      query: () => ({
        url: '/reports'
      }),
      providesTags: ['Reports'],
      transformResponse: response => ({
        reports: response.data[0],
        pagination: response.data.pagination
      })
    }),
    seenReport: builder.mutation({
      query: id => ({
        url: `/reports/seen/${id}`,
        method: 'POST'
      }),
      invalidatesTags: ['Reports']
    }),
    deleteReport: builder.mutation({
      query: id => ({
        url: `/reports/delete/${id}`,
        method: 'POST'
      }),
      invalidatesTags: ['Reports']
    })
  })
})

export const {
  useGetReportsQuery,
  useSeenReportMutation,
  useDeleteReportMutation
} = reports
