import { createEntityAdapter } from '@reduxjs/toolkit'

import { api } from 'app/api'

const submittedPostsAdapter = createEntityAdapter({
  sortComparer: (a, b) => (a.created_at < b.created_at ? 1 : -1)
})
const initialState = submittedPostsAdapter.getInitialState()

export const submittedPostsApiSlice = api.injectEndpoints({
  endpoints: builder => ({
    getSubmittedPosts: builder.query({
      query: ({ params }) => ({
        url: '/submitted',
        params
      }),
      transformResponse: res => {
        const pagination = res.data.pagination
        const initialData = res.data[0]

        const { ids, entities } = submittedPostsAdapter.setAll(
          initialState,
          initialData
        )

        return { ids, entities, pagination }
      },
      providesTags: res => [
        { type: 'Submitted-Posts', id: 'LIST' },
        ...res.ids.map(id => ({ type: 'Submitted-Posts', id }))
      ]
    }),
    deleteSubmittedPost: builder.mutation({
      query: ({ postId }) => ({
        url: `/posts/${postId}`,
        method: 'DELETE'
      }),
      invalidatesTags: (_res, _err, arg) => [
        'Posts',
        { type: 'Submitted-Posts', id: arg.postId }
      ]
    }),
    markSeenSubmittedPosts: builder.mutation({
      query: ({ postId }) => ({
        url: `/submitted/seen/${postId}`,
        method: 'POST'
      }),
      invalidatesTags: (_res, _err, arg) => [
        { type: 'Submitted-Posts', id: arg.postId },
        { type: 'Submitted-Posts', id: 'NOTIFICATION' }
      ]
    }),
    newPostSubmittedNotification: builder.query({
      query: () => ({
        url: '/submitted/seen-check'
      }),
      transformResponse: response => response.data,
      providesTags: [{ type: 'Submitted-Posts', id: 'NOTIFICATION' }]
    })
  })
})

export const {
  useGetSubmittedPostsQuery,
  useDeleteSubmittedPostMutation,
  useMarkSeenSubmittedPostsMutation,
  useNewPostSubmittedNotificationQuery
} = submittedPostsApiSlice
