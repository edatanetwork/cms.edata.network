import { api } from 'app/api'

const channels = api.injectEndpoints({
  endpoints: builder => ({
    getChannels: builder.query({
      query: () => ({
        url: '/channels'
      }),
      providesTags: ['Channels'],
      transformResponse: response => ({
        channels: response.data[0],
        pagination: response.data.pagination
      })
    }),
    createChannel: builder.mutation({
      query: body => ({
        url: '/channels',
        method: 'POST',
        body
      }),
      invalidatesTags: ['Channels']
    }),
    updateChannel: builder.mutation({
      query: ({ id, body }) => ({
        url: `/channels/${id}`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Channels']
    }),
    deleteChannel: builder.mutation({
      query: id => ({
        url: `channels/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Channels']
    })
  })
})

export const {
  useGetChannelsQuery,
  useCreateChannelMutation,
  useUpdateChannelMutation,
  useDeleteChannelMutation
} = channels
