import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token
      if (token) {
        headers.set('authorization', `Bearer ${token}`)
        headers.set('Accept', 'application/json')
      }

      return headers
    }
  }),
  tagTypes: [
    'Users',
    'Categories',
    'Domains',
    'Tags',
    'Ads',
    'Posts',
    'Applications',
    'Trash',
    'Reports',
    'Votes',
    'Submitted',
    'Redirects',
    'Sports',
    'Countries',
    'Languages',
    'Leagues',
    'Teams',
    'Movie-Genre',
    'Tv-Genre',
    'Channels',
    'Matches',
    'Films',
    'Link-Votes'
  ],
  endpoints: () => ({})
})
