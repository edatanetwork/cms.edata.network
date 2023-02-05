import { useGetVotesLinkQuery } from 'app/services/common/linkVotes'

const VotesTable = () => {
  const { data } = useGetVotesLinkQuery()

  return (
    <div>
      <div>VotesTable</div>
    </div>
  )
}

export default VotesTable
