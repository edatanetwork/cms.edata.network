import { api } from 'app/api'

const tags = api.injectEndpoints({
  endpoints: builder => ({
    getTags: builder.query({
      query: params => ({
        url: '/tags',
        params
      }),
      transformResponse: response => ({
        tags: response.data[0],
        pagination: response.data.pagination
      }),
      providesTags: ['Tags']
    }),
    createTag: builder.mutation({
      query: body => ({
        url: '/tags',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Tags']
    }),
    deleteTag: builder.mutation({
      query: id => ({
        url: `/tags/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Tags']
    }),
    updateTag: builder.mutation({
      query: ({ id, body }) => ({
        url: `/tags/${id}`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Tags']
    }),
    voteTag: builder.mutation({
      query: ({ id, body }) => ({
        url: `/tags/${id}/vote`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Tags']
    })
  })
})

export const {
  useGetTagsQuery,
  useCreateTagMutation,
  useDeleteTagMutation,
  useUpdateTagMutation,
  useVoteTagMutation
} = tags
