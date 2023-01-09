import { api } from 'app/api'

export const categories = api.injectEndpoints({
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => ({
        url: '/categories'
      }),
      transformResponse: response => response.data[0],
      providesTags: ['Categories']
    }),
    createCategory: builder.mutation({
      query: body => ({
        url: '/categories',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Categories']
    }),
    deleteCategory: builder.mutation({
      query: id => ({
        url: `/categories/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Categories']
    }),
    updateCategory: builder.mutation({
      query: ({ id, body }) => ({
        url: `/categories/${id}`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Categories']
    }),
    getApplications: builder.query({
      query: () => ({
        url: '/applications'
      }),
      transformResponse: response => response.data,
      providesTags: ['Applications']
    }),
    createApplication: builder.mutation({
      query: body => ({
        url: '/applications',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Applications']
    }),
    deleteApplication: builder.mutation({
      query: id => ({
        url: `/applications/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Applications']
    }),
    updateApplication: builder.mutation({
      query: ({ id, body }) => ({
        url: `/applications/${id}`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Applications']
    })
  })
})

export const {
  useGetCategoriesQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
  useGetApplicationsQuery,
  useCreateApplicationMutation,
  useDeleteApplicationMutation,
  useUpdateApplicationMutation
} = categories
