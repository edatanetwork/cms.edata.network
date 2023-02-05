import { api } from 'app/api'

const linkVotes = api.injectEndpoints({
  endpoints: builder => ({
    getVotesLink: builder.query({
      query: () => ({
        url: 'link-votes'
      })
    })
  })
})

export const { useGetVotesLinkQuery } = linkVotes
