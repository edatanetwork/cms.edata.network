import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { throwToast, removeConfirmation } from 'utils/throwToast'

import { setCurrent } from 'features/currentSlice'
import {
  useGetTagsQuery,
  useDeleteTagMutation,
  useVoteTagMutation
} from 'app/services/tags'

import Icon, { IconTypes } from 'components/common/Icon'
import Pagination from 'components/common/Pagination'
import { Grid } from 'components/styled/common/Grid.styled'
import { Button } from 'components/styled/common/Button.styled'
import { TagTable } from 'components/styled/pages/common/TagTable.styled'
import { Head, Body, Row, Cell } from 'components/styled/common/Table.styled'
import { CircleButton } from 'components/styled/common/Button.styled'

const Tags = () => {
  const dispatch = useDispatch()
  const [searchParams] = useSearchParams()
  const [deleteTag] = useDeleteTagMutation()
  const [voteTag] = useVoteTagMutation()

  const params = Object.fromEntries(searchParams)

  const [idxPosts, setIdxPosts] = useState(0)
  const sortByPosts = [{ posts_desc: 0 }, { posts_desc: 1 }, { posts_asc: 1 }]

  const { data, isLoading, isFetching } = useGetTagsQuery({
    ...params,
    ...sortByPosts[idxPosts]
  })

  const handleDelete = id => {
    const promise = deleteTag(id).unwrap()
    throwToast(promise, 'Deleting tag!', 'Tag deleted!')
  }

  const handleVote = (id, liked) => {
    const promise = voteTag({ id: id, body: { vote: liked ? 0 : 1 } }).unwrap()
    throwToast(promise, 'Voting tag!', 'Tag voted!')
  }

  return (
    <Grid>
      <TagTable>
        <Head>
          <Row>
            <Cell>Tag</Cell>
            <Cell>
              <Button
                onClick={() => setIdxPosts((idxPosts + 1) % sortByPosts.length)}
              >
                Posts
                {idxPosts === 0 && <Icon type={IconTypes.arrows} />}
                {idxPosts === 1 && <Icon type={IconTypes.arrowDown} />}
                {idxPosts === 2 && <Icon type={IconTypes.arrowUp} />}
              </Button>
            </Cell>
          </Row>
        </Head>
        <Body>
          {isLoading || isFetching ? (
            <Row>
              <Cell>
                <Icon type={IconTypes.loading} />
              </Cell>
            </Row>
          ) : (
            data.tags.map(tag => (
              <Row key={tag.id}>
                <Cell>{tag.name}</Cell>
                <Cell>{tag.post_number}</Cell>
                <Cell>
                  <CircleButton onClick={() => handleVote(tag.id, tag.liked)}>
                    {tag.liked ? (
                      <Icon type={IconTypes.heartRed} />
                    ) : (
                      <Icon type={IconTypes.heart} />
                    )}
                  </CircleButton>
                  <CircleButton onClick={() => dispatch(setCurrent(tag))}>
                    <Icon type={IconTypes.edit} />
                  </CircleButton>
                  <CircleButton
                    onClick={() =>
                      removeConfirmation(() => handleDelete(tag.id))
                    }
                  >
                    <Icon type={IconTypes.delete} />
                  </CircleButton>
                </Cell>
              </Row>
            ))
          )}
        </Body>
      </TagTable>
      {!isLoading && <Pagination data={data.pagination} />}
    </Grid>
  )
}

export default Tags
