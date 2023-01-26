import { api } from 'app/api'

const country = api.injectEndpoints({
  endpoints: builder => ({
    getCountries: builder.query({
      query: () => ({
        url: `/countries`
      }),
      transformResponse: res => ({ countries: res.data }),
      providesTags: ['Countries']
    }),
    createCountry: builder.mutation({
      query: body => ({
        url: `/countries`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Countries']
    }),
    updateCountry: builder.mutation({
      query: ({ id, body }) => ({
        url: `/countries/${id}`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Countries']
    }),
    deleteCountry: builder.mutation({
      query: id => ({
        url: `/countries/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Countries']
    })
  })
})

export const {
  useGetCountriesQuery,
  useCreateCountryMutation,
  useUpdateCountryMutation,
  useDeleteCountryMutation
} = country
