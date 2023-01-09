import { useDispatch, useSelector } from 'react-redux'

import {
  useGetReportsQuery,
  useSeenReportMutation,
  useDeleteReportMutation
} from 'app/services/reports'
import { setCurrent } from 'features/currentSlice'

import { formatDate } from 'utils/formatDate'
import { throwToast } from 'utils/throwToast'

import Pagination from 'components/common/Pagination'
// import Image from 'components/common/Image'
import Icon, { IconTypes } from 'components/common/Icon'
import { Grid } from 'components/styled/common/Grid.styled'
import { CircleButton } from 'components/styled/common/Button.styled'
import { ReportTable } from 'components/styled/pages/common/ReportTable.styled'
import { Head, Body, Row, Cell } from 'components/styled/common/Table.styled'

const Reports = () => {
  const dispatch = useDispatch()
  const { data, isLoading, isFetching } = useGetReportsQuery()
  const current = useSelector(state => state.current.current)

  const [seenReport] = useSeenReportMutation()
  const [deleteReport] = useDeleteReportMutation()

  const handleDelete = id => {
    const promise = deleteReport(id).unwrap()
    throwToast(promise, 'Deleting report!', 'Report deleted!')
  }

  return (
    <Grid>
      <ReportTable>
        <Head>
          <Row>
            <Cell>Title</Cell>
            <Cell></Cell>
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
            data.reports.map(report => (
              <Row
                key={report.id}
                seen={report.seen}
                active={report.id === current?.id}
                onClick={() => dispatch(setCurrent(report))}
              >
                <Cell>{report.post.title}</Cell>
                <Cell>
                  <Icon type={IconTypes.attentionColor} />
                </Cell>
                <Cell>{report.domain.name}</Cell>
                <Cell>{formatDate(report.created_at)}</Cell>
                <Cell>
                  <CircleButton onClick={() => seenReport(report.id)}>
                    <Icon type={IconTypes.eye} />
                  </CircleButton>
                  <CircleButton onClick={() => handleDelete(report.id)}>
                    <Icon type={IconTypes.delete} />
                  </CircleButton>
                </Cell>
              </Row>
            ))
          )}
        </Body>
      </ReportTable>
      {!isLoading && <Pagination data={data.pagination} />}
    </Grid>
  )
}

export default Reports
