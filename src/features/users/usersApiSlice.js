import { createEntityAdapter, createSelector } from '@reduxjs/toolkit'

import { api } from 'app/api'

const usersAdapter = createEntityAdapter({})
const initialState = usersAdapter.getInitialState()

export const usersApiSlice = api.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => ({
        url: '/users'
      }),
      transformResponse: res => usersAdapter.setAll(initialState, res.data),
      providesTags: res => {
        if (res?.ids) {
          return [
            { type: 'Users', id: 'List' },
            ...res.ids.map(id => ({ type: 'Users', id }))
          ]
        } else {
          return [{ type: 'Users', id: 'List' }]
        }
      }
    }),
    createUser: builder.mutation({
      query: newUserData => ({
        url: '/users',
        method: 'POST',
        body: newUserData
      }),
      invalidatesTags: [{ type: 'Users', id: 'List' }]
    }),
    updateUser: builder.mutation({
      query: updateUserData => ({
        url: `/users/${updateUserData.id}`,
        method: 'POST',
        body: updateUserData
      }),
      invalidatesTags: (_res, _err, arg) => [{ type: 'Users', id: arg.id }]
    }),
    deleteUser: builder.mutation({
      query: ({ userId }) => ({
        url: `/users/${userId}`,
        method: 'DELETE'
      }),
      invalidatesTags: (_res, _err, arg) => [{ type: 'Users', id: arg.userId }]
    })
  })
})

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation
} = usersApiSlice

export const selectUsersResult = usersApiSlice.endpoints.getUsers.select()

const selectUsersData = createSelector(
  selectUsersResult,
  userResults => userResults.data
)

export const {
  selectIds: selectUserIds,
  selectAll: selectAllUsers,
  selectById: selectUserById
} = usersAdapter.getSelectors(state => selectUsersData(state) ?? initialState)
