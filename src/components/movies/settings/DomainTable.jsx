import { useDispatch } from 'react-redux'

import { setCurrent } from 'features/currentSlice'
import { formatDate } from 'utils/formatDate'
import { throwToast, removeConfirmation } from 'utils/throwToast'
import {
  useGetDomainsQuery,
  useDeleteDomainMutation
} from 'app/services/common/domains'

import EditDeleteButtons from 'components/common/EditDeleteButtons'
import Icon, { IconTypes } from 'components/common/Icon'
import { Grid } from 'components/styled/common/Grid.styled'
import { DomainTable } from 'components/styled/pages/common/DomainTable.styled'
import { Head, Body, Row, Cell } from 'components/styled/common/Table.styled'

const Domains = () => {
  const dispatch = useDispatch()
  const [deleteDomain] = useDeleteDomainMutation()
  const { data, isLoading } = useGetDomainsQuery({ type: 'movies' })

  const handleDelete = id => {
    const promise = deleteDomain(id).unwrap()
    throwToast(promise, 'Deleting domain!', 'Domain deleted!')
  }

  return (
    <Grid>
      <DomainTable>
        <Head>
          <Row>
            <Cell>Domain Name</Cell>
            <Cell>Posts</Cell>
            <Cell>Downloads</Cell>
            <Cell>Url</Cell>
            <Cell>Created At</Cell>
          </Row>
        </Head>
        <Body>
          {isLoading ? (
            <Row>
              <Cell>
                <Icon type={IconTypes.loading} />
              </Cell>
            </Row>
          ) : (
            data.map(domain => (
              <Row key={domain.id}>
                <Cell>{domain.name}</Cell>
                <Cell></Cell>
                <Cell></Cell>
                <Cell>{domain.url}</Cell>
                <Cell>{formatDate(domain.created_at)}</Cell>
                <Cell>
                  <EditDeleteButtons
                    edit={() => dispatch(setCurrent(domain))}
                    remove={() =>
                      removeConfirmation(() => handleDelete(domain.id))
                    }
                  />
                </Cell>
              </Row>
            ))
          )}
        </Body>
      </DomainTable>
    </Grid>
  )
}

export default Domains
