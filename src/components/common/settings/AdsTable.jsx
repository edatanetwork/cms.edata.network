import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setCurrent } from 'features/currentSlice'
import { setDomainId } from 'features/filterSlice'
import { throwToast, removeConfirmation } from 'utils/throwToast'

import { useGetAdsQuery, useDeleteAdMutation } from 'app/services/ads'

import Icon, { IconTypes } from 'components/common/Icon'
import EditDeleteButtons from '../EditDeleteButtons'
import { Grid } from 'components/styled/common/Grid.styled'
import { AdTable } from 'components/styled/pages/common/AdTable.styled'
import { DomainTable } from 'components/styled/pages/common/AdTable.styled'
import { Head, Body, Row, Cell } from 'components/styled/common/Table.styled'

export default ({ domains, isLoading }) => {
  const dispatch = useDispatch()
  const domainId = useSelector(state => state.filter.domainId)

  const { data: ads, isLoading: isLoadingAds } = useGetAdsQuery()

  const [deleteAd] = useDeleteAdMutation()

  const handleDelete = async id => {
    const promise = deleteAd(id).unwrap()
    throwToast(promise, 'Deleting ad!', 'Ad deleted!')
  }

  useEffect(() => {
    if (!isLoading) {
      dispatch(setDomainId(domains[0].id))
    }
    // eslint-disable-next-line
  }, [isLoading])

  return (
    <Grid columns='1fr 2fr'>
      <DomainTable>
        <Head>
          <Row>
            <Cell>Domain Name</Cell>
            <Cell>Ads</Cell>
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
            domains.map(domain => (
              <Row
                key={domain.id}
                active={domainId === domain.id}
                onClick={() => dispatch(setDomainId(domain.id))}
              >
                <Cell>{domain.name}</Cell>
                <Cell>{domain.ads_no}</Cell>
              </Row>
            ))
          )}
        </Body>
      </DomainTable>
      <AdTable>
        <Head>
          <Row>
            <Cell>Zone</Cell>
            <Cell>Type</Cell>
            <Cell>Title</Cell>
            <Cell>Status</Cell>
          </Row>
        </Head>
        <Body>
          {isLoadingAds ? (
            <Row>
              <Cell>
                <Icon type={IconTypes.loading} />
              </Cell>
            </Row>
          ) : (
            ads
              .filter(ad => ad.domain_id === domainId)
              .map(ad => (
                <Row key={ad.id}>
                  <Cell>
                    {(
                      ad.zone.slice(0, 1).toUpperCase() + ad.zone.slice(1)
                    ).replace('_', ' ')}
                  </Cell>
                  <Cell>{ad.type}</Cell>
                  <Cell>{ad.title}</Cell>
                  <Cell>{ad.status === true ? 'Active' : 'Inactive'}</Cell>
                  <Cell>
                    <EditDeleteButtons
                      edit={() => dispatch(setCurrent(ad))}
                      remove={() =>
                        removeConfirmation(() => handleDelete(ad.id))
                      }
                    />
                  </Cell>
                </Row>
              ))
          )}
        </Body>
      </AdTable>
    </Grid>
  )
}
