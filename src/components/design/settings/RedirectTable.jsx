import { useDispatch } from 'react-redux'

import {
  useGetRedirectsQuery,
  useDeleteRedirectMutation
} from 'app/services/redirect'
import { setCurrent } from 'features/currentSlice'
import { removeConfirmation, throwToast } from 'utils/throwToast'

import EditDeleteButtons from 'components/common/EditDeleteButtons'
import Icon, { IconTypes } from 'components/common/Icon'
import { RedirectTable } from 'components/styled/pages/common/RedirectTable.styled'
import { Head, Body, Row, Cell } from 'components/styled/common/Table.styled'

const Redirects = () => {
  const dispatch = useDispatch()
  const [deleteRedirect] = useDeleteRedirectMutation()
  const { data, isLoading, isFetching } = useGetRedirectsQuery()

  const handleDelete = id => {
    const promise = deleteRedirect(id).unwrap()
    throwToast(promise, 'Deleting redirect!', 'Redirect deleted!')
  }

  return (
    <RedirectTable>
      <Head>
        <Row>
          <Cell>Website</Cell>
          <Cell>Url</Cell>
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
          data.map(redirect => (
            <Row key={redirect.id}>
              <Cell>{redirect.website}</Cell>
              <Cell>{redirect.url}</Cell>
              <Cell>
                <EditDeleteButtons
                  edit={() => dispatch(setCurrent(redirect))}
                  remove={() =>
                    removeConfirmation(() => handleDelete(redirect.id))
                  }
                />
              </Cell>
            </Row>
          ))
        )}
      </Body>
    </RedirectTable>
  )
}

export default Redirects
