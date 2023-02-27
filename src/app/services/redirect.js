import { api } from 'app/api'

const redirect = api.injectEndpoints({
  endpoints: builder => ({
    getRedirects: builder.query({
      query: () => ({
        url: '/redirects'
      }),
      providesTags: ['Redirects'],
      transformResponse: response => {
        const data = response.data.map(item => ({
          ...item,
          name: item.website
        }))
        return data
      }
    }),
    deleteRedirect: builder.mutation({
      query: id => ({
        url: `/redirects/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Redirects']
    }),
    createRedirect: builder.mutation({
      query: body => ({
        url: '/redirects',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Redirects']
    }),
    updateRedirect: builder.mutation({
      query: ({ id, body }) => ({
        url: `/redirects/${id}`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Redirects']
    })
  })
})

export const {
  useGetRedirectsQuery,
  useDeleteRedirectMutation,
  useCreateRedirectMutation,
  useUpdateRedirectMutation
} = redirect
