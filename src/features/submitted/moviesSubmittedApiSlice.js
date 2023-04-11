import { api } from 'app/api'

const moviesSubmittedApiSlice = api.injectEndpoints({
  endpoints: builder => ({
    getSubmittedMovies: builder.query({
      query: () => ({
        url: '/movie-submitted'
      }),
      transformResponse: res => ({
        movies: res.data[0],
        pagination: res.data.pagination
      }),
      providesTags: res => [
        { type: 'Submitted-Movies', id: 'LIST' },
        ...res.movies.map(item => ({
          type: 'Submitted-Movies',
          id: item.id
        }))
      ]
    }),
    markSeenSubmittedMovie: builder.mutation({
      query: ({ id }) => ({
        url: `/movie-submitted/seen/${id}`,
        method: 'POST'
      }),
      invalidatesTags: (_res, _err, args) => [
        { type: 'Submitted-Movies', id: args.id },
        { type: 'Submitted-Movies', id: 'NOTIFICATION' }
      ]
    }),
    newMovieSubmittedNotification: builder.query({
      query: () => ({
        url: '/movie-submitted/seen-check'
      }),
      transformResponse: response => response.data,
      providesTags: [{ type: 'Submitted-Movies', id: 'NOTIFICATION' }]
    })
  })
})

export const {
  useGetSubmittedMoviesQuery,
  useMarkSeenSubmittedMovieMutation,
  useNewMovieSubmittedNotificationQuery
} = moviesSubmittedApiSlice

export default moviesSubmittedApiSlice
