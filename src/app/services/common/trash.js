import { api } from 'app/api'

const trash = api.injectEndpoints({
  endpoints: builder => ({
    getTrash: builder.query({
      query: ({ url, params }) => ({
        url,
        params
      }),
      transformResponse: response => ({
        trash: response.data[0],
        pagination: response.data.pagination
      }),
      providesTags: ['Trash']
    }),
    restore: builder.mutation({
      query: ({ url, id }) => ({
        url: `${url}/restore/${id}`,
        method: 'POST'
      }),
      invalidatesTags: ['Trash', 'Films']
    }),
    deletePermanently: builder.mutation({
      query: ({ url, id }) => ({
        url: `${url}/delete-permanently/${id}`,
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
