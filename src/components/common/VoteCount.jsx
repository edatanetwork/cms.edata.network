import styled from 'styled-components'

const Votes = props => {
  const totalVotes = props.upVotes + props.downVotes
  let upVotes, downVotes

  if (totalVotes >= 1) {
    if (isNaN((props.upVotes / totalVotes) * 100)) {
      upVotes = 0
    } else {
      upVotes = (props.upVotes / totalVotes) * 100
    }
    if (isNaN((props.downVotes / totalVotes) * 100)) {
      downVotes = 0
    } else {
      downVotes = (props.downVotes / totalVotes) * 100
    }
  } else {
    upVotes = 50
    downVotes = 50
  }

  return (
    <VotesContainer upVotes={upVotes} downVotes={downVotes}>
      <div>{totalVotes}</div>
      <hr />
      <div>
        <p>{props.upVotes}</p>
        <p>{props.downVotes}</p>
      </div>
    </VotesContainer>
  )
}

export default Votes

const VotesContainer = styled.div`
  display: flex;

  hr {
    height: 25px;
    width: 2px;
    margin: 0 1rem;
    background-color: ${({ theme }) => theme.clrGray};
    border: 0;
  }

  div:last-of-type {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 60px;

    &::before,
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      height: 2px;
    }

    &::before {
      left: 0;
      background-color: #cecece;
    }

    &::after {
      right: 0;
      background-color: #fd4a4a;
    }

    &::before {
      width: ${props => props.upVotes}%;
    }

    &::after {
      width: ${props => props.downVotes}%;
    }
  }
`
