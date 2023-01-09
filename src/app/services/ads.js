import { api } from 'app/api'

const ads = api.injectEndpoints({
  endpoints: builder => ({
    getAds: builder.query({
      query: () => ({
        url: '/ads'
      }),
      providesTags: ['Ads'],
      transformResponse: response => response.data
    }),
    createAd: builder.mutation({
      query: body => ({
        url: '/ads',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Ads', 'Domains']
    }),
    deleteAd: builder.mutation({
      query: id => ({
        url: `/ads/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Ads', 'Domains']
    }),
    updateAd: builder.mutation({
      query: ({ id, body }) => ({
        url: `/ads/${id}`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Ads']
    })
  })
})

export const {
  useGetAdsQuery,
  useCreateAdMutation,
  useDeleteAdMutation,
  useUpdateAdMutation
} = ads
