import { api } from 'app/api'

const channelsSubmittedApiSlice = api.injectEndpoints({
  endpoints: builder => ({
    getSubmittedChannels: builder.query({
      query: () => ({
        url: '/channel-submitted'
      }),
      transformResponse: res => ({
        channels: res.data[0],
        pagination: res.data.pagination
      }),
      providesTags: res => [
        { type: 'Submitted-Channels', id: 'LIST' },
        ...res.channels.map(item => ({
          type: 'Submitted-Channels',
          id: item.id
        }))
      ]
    }),
    markSeenSubmittedChannel: builder.mutation({
      query: ({ id }) => ({
        url: `/channel-submitted/seen/${id}`,
        method: 'POST'
      }),
      invalidatesTags: (_res, _err, args) => [
        { type: 'Submitted-Channels', id: args.id },
        { type: 'Submitted-Channels', id: 'NOTIFICATION' }
      ]
    }),
    newChannelSubmittedNotification: builder.mutation({
      query: () => ({
        url: '/channel-submitted/seen-check'
      }),
      transformResponse: response => response.data,
      providesTags: [{ type: 'Submitted-Channels', id: 'NOTIFICATION' }]
    })
  })
})

export const {
  useGetSubmittedChannelsQuery,
  useMarkSeenSubmittedChannelMutation,
  useNewChannelSubmittedNotificationMutation
} = channelsSubmittedApiSlice
