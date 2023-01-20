import { useSelector, useDispatch } from 'react-redux'

import {
  useGetSubmittedQuery,
  useSeenSubmittedMutation
} from 'app/services/submitted'

import { setCurrent } from 'features/currentSlice'
import { formatDate } from 'utils/formatDate'

import Pagination from 'components/common/Pagination'
import Icon, { IconTypes } from 'components/common/Icon'
import { Grid } from 'components/styled/common/Grid.styled'
import { CircleButton } from 'components/styled/common/Button.styled'
import { SubmittedTable } from 'components/styled/pages/common/SubmittedTable.styled'
import { Head, Body, Row, Cell } from 'components/styled/common/Table.styled'

const Submitted = () => {
  const dispatch = useDispatch()
  const { data, isLoading, isFetching } = useGetSubmittedQuery()
  const current = useSelector(state => state.current.current)
  const [seenSubmitted] = useSeenSubmittedMutation()

  return (
    <Grid>
      <SubmittedTable>
        <Head>
          <Row>
            <Cell>Title</Cell>
            <Cell>Domain</Cell>
            <Cell>Date</Cell>
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
            data.submitted.map(submitted => (
              <Row
                key={submitted.id}
                active={submitted.id === current?.id}
                seen={submitted.seen}
              >
                <Cell onClick={() => dispatch(setCurrent(submitted))}>
                  {submitted.title}
                </Cell>
                <Cell></Cell>
                <Cell>{formatDate(submitted.created_at)}</Cell>
                <Cell>
                  <CircleButton onClick={() => seenSubmitted(submitted.id)}>
                    <Icon type={IconTypes.eye} />
                  </CircleButton>
                  <CircleButton>
                    <Icon type={IconTypes.delete} />
                  </CircleButton>
                </Cell>
              </Row>
            ))
          )}
        </Body>
      </SubmittedTable>
      {!isLoading && <Pagination data={data.pagination} />}
    </Grid>
  )
}

export default Submitted
