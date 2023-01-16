import { api } from 'app/api'

const language = api.injectEndpoints({
  endpoints: builder => ({
    getLanguages: builder.query({
      query: () => ({
        url: `/languages`
      }),
      transformResponse: res => ({
        languages: res.data[0],
        pagination: res.data.pagination
      }),
      providesTags: ['Languages']
    }),
    createLanguage: builder.mutation({
      query: body => ({
        url: `/languages`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Languages']
    }),
    updateLanguage: builder.mutation({
      query: ({ id, body }) => ({
        url: `/languages/${id}`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Languages']
    }),
    deleteLanguage: builder.mutation({
      query: id => ({
        url: `/languages/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Languages']
    })
  })
})

export const {
  useGetLanguagesQuery,
  useCreateLanguageMutation,
  useUpdateLanguageMutation,
  useDeleteLanguageMutation
} = language
