import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { setCurrent } from 'features/currentSlice'
import { setDomainId } from 'features/domainSlice'
import { useGetDomainsQuery } from 'app/services/domains'
import { useGetAdsQuery, useDeleteAdMutation } from 'app/services/ads'

import { throwToast, removeConfirmation } from 'utils/throwToast'

import EditDeleteButtons from 'components/common/EditDeleteButtons'
import Icon, { IconTypes } from 'components/common/Icon'
import { Grid } from 'components/styled/common/Grid.styled'
import { Button } from 'components/styled/common/Button.styled'
import { AdTable } from 'components/styled/pages/common/AdTable.styled'
import { DomainTable } from 'components/styled/pages/common/AdTable.styled'
import { Head, Body, Row, Cell } from 'components/styled/common/Table.styled'

const Ad = () => {
  const dispatch = useDispatch()
  const domain_id = useSelector(state => state.domain.domain_id)

  const [idxAds, setIdxAds] = useState(0)
  const sortByAds = [{ ads_desc: 0 }, { ads_desc: 1 }, { ads_asc: 1 }]

  const { data: domains, isLoading: isLoadingDomains } = useGetDomainsQuery({
    ...sortByAds[idxAds]
  })
  const { data: ads, isLoading: isLoadingAds } = useGetAdsQuery()

  const [deleteAd] = useDeleteAdMutation()

  const handleDelete = async id => {
    const promise = deleteAd(id).unwrap()
    throwToast(promise, 'Deleting ad!', 'Ad deleted!')
  }

  useEffect(() => {
    if (!isLoadingDomains) {
      dispatch(setDomainId(domains[0].id))
    }
    // eslint-disable-next-line
  }, [isLoadingDomains])

  return (
    <Grid columns='1fr 2fr'>
      <DomainTable>
        <Head>
          <Row>
            <Cell>Domain Name</Cell>
            <Cell>
              <Button
                onClick={() => setIdxAds((idxAds + 1) % sortByAds.length)}
              >
                Ads
                {idxAds === 0 && <Icon type={IconTypes.arrows} />}
                {idxAds === 1 && <Icon type={IconTypes.arrowDown} />}
                {idxAds === 2 && <Icon type={IconTypes.arrowUp} />}
              </Button>
            </Cell>
          </Row>
        </Head>
        <Body>
          {isLoadingDomains ? (
            <Row>
              <Cell>
                <Icon type={IconTypes.loading} />
              </Cell>
            </Row>
          ) : (
            domains.map(domain => (
              <Row
                key={domain.id}
                active={domain_id === domain.id}
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
              .filter(ad => ad.domain_id === domain_id)
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

export default Ad
