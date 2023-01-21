import { api } from 'app/api'

const genre = api.injectEndpoints({
  endpoints: builder => ({
    getTvGenres: builder.query({
      query: () => ({
        url: '/tv-genres'
      }),
      providesTags: ['Tv-Genre'],
      transformResponse: response => response.data
    }),
    createTvGenre: builder.mutation({
      query: body => ({
        url: '/tv-genres',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Tv-Genre']
    }),
    updateTvGenre: builder.mutation({
      query: ({ id, body }) => ({
        url: `/tv-genres/${id}`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Tv-Genre']
    }),
    deleteTvGenre: builder.mutation({
      query: id => ({
        url: `/tv-genres/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Tv-Genre']
    })
  })
})

export const {
  useGetTvGenresQuery,
  useCreateTvGenreMutation,
  useUpdateTvGenreMutation,
  useDeleteTvGenreMutation
} = genre
