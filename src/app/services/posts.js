import { api } from 'app/api'

const posts = api.injectEndpoints({
  endpoints: builder => ({
    getPosts: builder.query({
      query: params => ({
        url: `/posts`,
        params
      }),
      providesTags: ['Posts'],
      transformResponse: response => ({
        posts: response.data[0],
        pagination: response.data.pagination
      })
    }),
    createPost: builder.mutation({
      query: body => ({
        url: '/posts',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Posts']
    }),
    deletePost: builder.mutation({
      query: id => ({
        url: `/posts/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Posts', 'Trash']
    }),
    updatePost: builder.mutation({
      query: ({ id, body }) => ({
        url: `/posts/${id}`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Posts']
    }),
    importCSV: builder.mutation({
      query: body => ({
        url: '/posts/import-csv',
        method: 'POST',
        body
      })
    }),
    validate: builder.mutation({
      query: body => ({
        url: '/posts/validation',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
  useImportCSVMutation,
  useValidateMutation
} = posts
