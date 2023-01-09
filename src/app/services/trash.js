import { api } from 'app/api'

const trash = api.injectEndpoints({
  endpoints: builder => ({
    getTrash: builder.query({
      query: params => ({
        url: '/trash',
        params
      }),
      transformResponse: response => ({
        trash: response.data[0],
        pagination: response.data.pagination
      }),
      providesTags: ['Trash']
    }),
    restore: builder.mutation({
      query: id => ({
        url: `/trash/restore/${id}`,
        method: 'POST'
      }),
      invalidatesTags: ['Trash']
    }),
    deletePermanently: builder.mutation({
      query: id => ({
        url: `/trash/delete-permanently/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Trash']
    })
  })
})

export const {
  useGetTrashQuery,
  useRestoreMutation,
  useDeletePermanentlyMutation
} = trash
