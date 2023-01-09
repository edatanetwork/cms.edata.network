import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCurrent } from 'features/currentSlice'

import { throwToast, removeConfirmation } from 'utils/throwToast'

import {
  useGetApplicationsQuery,
  useDeleteApplicationMutation
} from 'app/services/categories'

import EditDeleteButtons from 'components/common/EditDeleteButtons'
import Icon, { IconTypes } from 'components/common/Icon'
import { RoundButton } from 'components/styled/common/Button.styled'

import {
  TableWrapper,
  CategoryTable
} from 'components/styled/pages/design/CategoryTable.styled'
import { Head, Body, Row, Cell } from 'components/styled/common/Table.styled'

const ApplicationsTable = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [deleteApplication] = useDeleteApplicationMutation()
  const { data, isLoading, isFetching } = useGetApplicationsQuery()

  const handleDeleteAppplication = id => {
    const promise = deleteApplication(id)
    throwToast(promise, 'Deleting application!', 'Application deleted!')
  }

  return (
    <TableWrapper>
      <CategoryTable>
        <Head>
          <Row>
            <Cell>Applications</Cell>
            <Cell>Posts</Cell>
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
            data.map(el => (
              <Row key={el.id}>
                <Cell>{el.name}</Cell>
                <Cell>{el.post_number}</Cell>
                <Cell>
                  <EditDeleteButtons
                    edit={async () => {
                      await navigate('/design/settings/categories/application')
                      dispatch(setCurrent(el))
                    }}
                    remove={() =>
                      removeConfirmation(() => handleDeleteAppplication(el.id))
                    }
                  />
                </Cell>
              </Row>
            ))
          )}
        </Body>
      </CategoryTable>
      <RoundButton
        onClick={() => navigate('/design/settings/categories/application')}
      >
        <Icon type={IconTypes.plusCircle} />
        Add new
      </RoundButton>
    </TableWrapper>
  )
}

export default ApplicationsTable
