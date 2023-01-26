import { api } from 'app/api'

const links = api.injectEndpoints({
  endpoints: builder => ({
    createLink: builder.mutation({
      query: body => ({
        url: '/links',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Channels']
    }),
    updateLink: builder.mutation({
      query: ({ id, body }) => ({
        url: `/links/${id}`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Channels']
    }),
    deleteLink: builder.mutation({
      query: id => ({
        url: `/links/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Channels']
    })
  })
})

export const {
  useCreateLinkMutation,
  useUpdateLinkMutation,
  useDeleteLinkMutation
} = links
