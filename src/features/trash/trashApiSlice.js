import { createEntityAdapter } from '@reduxjs/toolkit'

import { api } from 'app/api'

const trashesAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.created_at.localeCompare(a.created_at)
})

const initialState = trashesAdapter.getInitialState()

const trashesApiSlice = api.injectEndpoints({
  endpoints: builder => ({
    getTrashes: builder.query({
      query: ({ url, params }) => ({
        url,
        params
      }),
      transformResponse: res => {
        const pagination = res.data.pagination
        const { ids, entities } = trashesAdapter.setAll(
          initialState,
          res.data[0]
        )

        return {
          ids,
          entities,
          pagination
        }
      },
      providesTags: res => [
        { type: 'Trash', id: 'Items' },
        ...res.ids.map(id => ({ type: 'Trash', id }))
      ]
    }),
    restoreTrash: builder.mutation({
      query: ({ url, id }) => ({
        url: `${url}/restore/${id}`,
        method: 'POST'
      }),
      invalidatesTags: (_res, _err, arg) => [{ type: 'Trash', id: arg.id }]
    }),
    deleteTrash: builder.mutation({
      query: ({ url, id }) => ({
        url: `${url}/delete-permanently/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: (_res, _err, arg) => [{ type: 'Trash', id: arg.id }]
    })
  })
})

export const selectTrashesResult = trashesApiSlice.endpoints.getTrashes.select()

export const {
  useGetTrashesQuery,
  useRestoreTrashMutation,
  useDeleteTrashMutation
} = trashesApiSlice
