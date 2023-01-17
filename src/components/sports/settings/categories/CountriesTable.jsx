import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import {
  useGetCountriesQuery,
  useDeleteCountryMutation
} from 'app/common/countries'
import { throwToast, removeConfirmation } from 'utils/throwToast'
import { setCurrent } from 'features/currentSlice'
import { setCountryId } from 'features/filterSlice'

import Icon, { IconTypes } from 'components/common/Icon'
import EditDeleteButtons from 'components/common/EditDeleteButtons'
import { RoundButton } from 'components/styled/common/Button.styled'
import {
  TableWrapper,
  CategoryTable
} from 'components/styled/pages/sports/CategoryTable.styled'
import { Head, Body, Row, Cell } from 'components/styled/common/Table.styled'

const CountriesTable = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const countryId = useSelector(state => state.filter.countryId)
  const current = useSelector(state => state.current.current)
  const { data, isLoading } = useGetCountriesQuery()
  const [deleteCountry] = useDeleteCountryMutation()

  const handleDelete = id => {
    const promise = deleteCountry(id).unwrap()
    throwToast(promise, 'Deleting country!', 'Country deleted!')
  }

  useEffect(() => {
    if (!isLoading) {
      dispatch(setCountryId(data.countries[0].id))
    }
  }, [isLoading])

  return (
    <TableWrapper>
      <CategoryTable>
        <Head>
          <Row>
            <Cell>Countries</Cell>
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
            data.countries.map(country => (
              <Row
                key={country.id}
                active={
                  current ? current.id === country.id : country.id === countryId
                }
                onClick={() => dispatch(setCountryId(country.id))}
              >
                <Cell>{country.name}</Cell>
                <Cell>
                  <EditDeleteButtons
                    edit={async () => {
                      await navigate('/sports/settings/categories/countries')
                      dispatch(setCurrent(country))
                    }}
                    remove={() =>
                      removeConfirmation(() => handleDelete(country.id))
                    }
                  />
                </Cell>
              </Row>
            ))
          )}
        </Body>
      </CategoryTable>
      <div>
        <RoundButton
          onClick={() => navigate('/sports/settings/categories/countries')}
        >
          <Icon type={IconTypes.plusCircle} />
          Add new
        </RoundButton>
      </div>
    </TableWrapper>
  )
}

export default CountriesTable
