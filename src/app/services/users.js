import { api } from 'app/api'

export const users = api.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => ({
        url: '/users'
      }),
      transformResponse: response => response.data,
      providesTags: ['Users']
    }),
    createUser: builder.mutation({
      query: data => ({
        url: '/users',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Users']
    }),
    deleteUser: builder.mutation({
      query: id => ({
        url: `/users/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Users']
    }),
    updateUser: builder.mutation({
      query: ({ id, body }) => ({
        url: `/users/${id}`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Users']
    })
  })
})

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
  useUpdateUserMutation
} = users
