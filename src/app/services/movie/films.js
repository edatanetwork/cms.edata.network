import { api } from 'app/api'

const films = api.injectEndpoints({
  endpoints: builder => ({
    getFilms: builder.query({
      query: () => ({
        url: '/movies'
      }),
      providesTags: ['Films'],
      transformResponse: response => ({
        movies: response.data[0],
        pagination: response.data.pagination
      })
    }),
    createFilm: builder.mutation({
      query: body => ({
        url: '/movies',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Films']
    }),
    updateFilm: builder.mutation({
      query: ({ id, body }) => ({
        url: `/movies/${id}`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Films']
    }),
    deleteFilm: builder.mutation({
      query: id => ({
        url: `/movies/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Films']
    })
  })
})

export const {
  useGetFilmsQuery,
  useCreateFilmMutation,
  useUpdateFilmMutation,
  useDeleteFilmMutation
} = films
