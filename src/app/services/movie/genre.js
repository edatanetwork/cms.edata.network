import { api } from 'app/api'

const genre = api.injectEndpoints({
  endpoints: builder => ({
    getMovieGenres: builder.query({
      query: () => ({
        url: '/movie-genres'
      }),
      providesTags: ['Movie-Genre'],
      transformResponse: response => response.data
    }),
    createMovieGenre: builder.mutation({
      query: body => ({
        url: '/movie-genres',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Movie-Genre']
    }),
    updateMovieGenre: builder.mutation({
      query: ({ id, body }) => ({
        url: `/movie-genres/${id}`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Movie-Genre']
    }),
    deleteMovieGenre: builder.mutation({
      query: id => ({
        url: `/movie-genres/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Movie-Genre']
    })
  })
})

export const {
  useGetMovieGenresQuery,
  useCreateMovieGenreMutation,
  useUpdateMovieGenreMutation,
  useDeleteMovieGenreMutation
} = genre
