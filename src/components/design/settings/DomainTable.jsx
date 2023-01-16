import { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  useGetDomainsQuery,
  useDeleteDomainMutation
} from 'app/services/domains'
import { setCurrent } from 'features/currentSlice'

import { throwToast, removeConfirmation } from 'utils/throwToast'
import { formatDate } from 'utils/formatDate'

import EditDeleteButtons from 'components/common/EditDeleteButtons'
import Icon, { IconTypes } from 'components/common/Icon'
import Grid from 'components/styled/common/Grid.styled'
import { DomainTable } from 'components/styled/pages/common/DomainTable.styled'
import { Head, Body, Row, Cell } from 'components/styled/common/Table.styled'
import { Button } from 'components/styled/common/Button.styled'

const Domains = () => {
  const dispatch = useDispatch()
  const [deleteDomain] = useDeleteDomainMutation()

  const [idxPosts, setIdxPosts] = useState(0)
  const sortByPosts = [{ posts_desc: 0 }, { posts_desc: 1 }, { posts_asc: 1 }]
  const [idxDownloads, setIdxDownloads] = useState(0)
  const sortByDownloads = [
    { downloads_desc: 0 },
    { downloads_desc: 1 },
    { downloads_asc: 1 }
  ]

  const { data, isLoading, isFetching } = useGetDomainsQuery({
    ...sortByPosts[idxPosts],
    ...sortByDownloads[idxDownloads]
  })

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
            <Cell>
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
            </Cell>
            <Cell>Url</Cell>
            <Cell>Created At</Cell>
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
            data.map(domain => (
              <Row key={domain.id}>
                <Cell>{domain.name}</Cell>
                <Cell>{domain.posts_number}</Cell>
                <Cell>{domain.downloads}</Cell>
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
