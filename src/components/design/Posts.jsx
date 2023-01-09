import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { setCurrent } from 'features/currentSlice'
import { useGetPostsQuery, useDeletePostMutation } from 'app/services/posts'

import { formatDate } from 'utils/formatDate'
import { throwToast } from 'utils/throwToast'

import Image from 'components/common/Image'
import Votes from 'components/common/VoteCount'
import Pagination from 'components/common/Pagination'
import Icon, { IconTypes } from 'components/common/Icon'
import Grid from 'components/styled/common/Grid.styled'
import { Button, CircleButton } from 'components/styled/common/Button.styled'
import * as Styled from 'components/styled/common/Table.styled'

const Posts = () => {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const [deletePost] = useDeletePostMutation()

  const params = Object.fromEntries(searchParams)

  const [idxVotes, setIdxVotes] = useState(0)
  const sortByVotes = [
    { votes_more_less: 0 },
    { votes_more_less: 1 },
    { votes_less_more: 1 }
  ]
  const [idxDownloads, setIdxDownloads] = useState(0)
  const sortByDownloads = [
    { downloads_more_less: 0 },
    { downloads_more_less: 1 },
    { downloads_less_more: 1 }
  ]
  const [idxAuthor, setIdxAuthor] = useState(0)
  const sortByAuthor = [
    { author_asc: 0 },
    { author_asc: 1 },
    { author_desc: 1 }
  ]

  const { data, isLoading, isFetching } = useGetPostsQuery({
    ...params,
    ...sortByVotes[idxVotes],
    ...sortByDownloads[idxDownloads],
    ...sortByAuthor[idxAuthor]
  })

  const handleDelete = id => {
    const promise = deletePost(id).unwrap()
    throwToast(promise, 'Deleting post!', 'Post deleted!')
  }

  return (
    <Grid>
      <Styled.DesignTable>
        <Styled.Head>
          <Styled.Row>
            <Styled.Cell>Title</Styled.Cell>
            <Styled.Cell>
              <Button
                onClick={() => setIdxVotes((idxVotes + 1) % sortByVotes.length)}
              >
                Votes
                {idxVotes === 0 && <Icon type={IconTypes.arrows} />}
                {idxVotes === 1 && <Icon type={IconTypes.arrowDown} />}
                {idxVotes === 2 && <Icon type={IconTypes.arrowUp} />}
              </Button>
            </Styled.Cell>
            <Styled.Cell>
              <Button
                onClick={() =>
                  setIdxDownloads((idxDownloads + 1) % sortByDownloads.length)
                }
              >
                Downloads
                {idxDownloads === 0 && <Icon type={IconTypes.arrows} />}
                {idxDownloads === 1 && <Icon type={IconTypes.arrowDown} />}
                {idxDownloads === 2 && <Icon type={IconTypes.arrowUp} />}
              </Button>
            </Styled.Cell>
            <Styled.Cell>Category</Styled.Cell>
            <Styled.Cell>
              <Button
                onClick={() =>
                  setIdxAuthor((idxAuthor + 1) % sortByAuthor.length)
                }
              >
                Author
                {idxAuthor === 0 && <Icon type={IconTypes.arrows} />}
                {idxAuthor === 1 && <Icon type={IconTypes.arrowDown} />}
                {idxAuthor === 2 && <Icon type={IconTypes.arrowUp} />}
              </Button>
            </Styled.Cell>
            <Styled.Cell>Date</Styled.Cell>
          </Styled.Row>
        </Styled.Head>
        <Styled.Body height='100vh - 11rem'>
          {isLoading || isFetching ? (
            <Styled.Row>
              <Styled.Cell>
                <Icon type={IconTypes.loading} />
              </Styled.Cell>
            </Styled.Row>
          ) : (
            data.posts.map(post => (
              <Styled.Row key={post.id}>
                <Styled.Cell>
                  <Image
                    src={post.post_images && post.post_images[0].preview}
                    width={64}
                    height={50}
                    quality={90}
                    format='webp'
                  />
                  {post.title}
                </Styled.Cell>
                <Styled.Cell>
                  <Votes upVotes={post.votes_up} downVotes={post.votes_down} />
                </Styled.Cell>
                <Styled.Cell>{post.downloads}</Styled.Cell>
                <Styled.Cell>
                  <Styled.Category color={post.category.color}>
                    {post.category.title}
                  </Styled.Category>
                </Styled.Cell>

                <Styled.Cell>{post.author}</Styled.Cell>
                <Styled.Cell>
                  {formatDate(post.created_at)}
                  <div>
                    <CircleButton
                      onClick={() => {
                        dispatch(setCurrent(post))
                      }}
                    >
                      <Icon type={IconTypes.edit} />
                    </CircleButton>
                    <CircleButton onClick={() => handleDelete(post.id)}>
                      <Icon type={IconTypes.delete} />
                    </CircleButton>
                  </div>
                </Styled.Cell>
              </Styled.Row>
            ))
          )}
        </Styled.Body>
      </Styled.DesignTable>
      {!isLoading && <Pagination data={data.pagination} />}
    </Grid>
  )
}

export default Posts
