import { api } from 'app/api'

export const domains = api.injectEndpoints({
  endpoints: builder => ({
    getDomains: builder.query({
      query: params => ({
        url: '/domains',
        params
      }),
      providesTags: ['Domains'],
      transformResponse: response => response.data
    }),
    createDomain: builder.mutation({
      query: body => ({
        url: '/domains',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Domains']
    }),
    deleteDomain: builder.mutation({
      query: id => ({
        url: `/domains/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Domains']
    }),
    updateDomain: builder.mutation({
      query: ({ id, body }) => ({
        url: `/domains/${id}`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Domains']
    })
  })
})

export const {
  useGetDomainsQuery,
  useCreateDomainMutation,
  useDeleteDomainMutation,
  useUpdateDomainMutation
} = domains
