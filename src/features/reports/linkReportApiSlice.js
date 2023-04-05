import { api } from 'app/api'

const linkReportApiSlice = api.injectEndpoints({
  endpoints: builder => ({
    getLinkReports: builder.query({
      query: params => ({
        url: 'link-reports',
        params
      }),
      transformResponse: res => ({
        reports: res.data[0],
        pagination: res.data.pagination
      }),
      providesTags: res => {
        const ids = res.reports.map(item => item.id)
        const tags = [
          { type: 'Report-Links', id: 'List' },
          ...ids.map(id => ({
            type: 'Report-Links',
            id
          }))
        ]

        return tags
      }
    }),
    markSeenLinkReport: builder.mutation({
      query: ({ id }) => ({
        url: `link-reports/seen/${id}`,
        method: 'POST'
      }),
      invalidatesTags: (_res, _err, args) => [
        { type: 'Report-Links', id: args.id }
      ]
    }),
    deleteLinkReport: builder.mutation({
      query: ({ id }) => ({
        url: `link-reports/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: (_res, _err, args) => [
        { type: 'Report-Links', id: args.id }
      ]
    })
  })
})

export const {
  useGetLinkReportsQuery,
  useDeleteLinkReportMutation,
  useMarkSeenLinkReportMutation
} = linkReportApiSlice
