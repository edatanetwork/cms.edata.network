import Dropdown from 'components/common/form/Dropdown'

import { useGetCountriesQuery } from 'app/services/common/countries'

const CountrySelect = ({ name }) => {
  const { data, isLoading } = useGetCountriesQuery()

  return (
    <Dropdown
      label='Country'
      placeholder='Select country'
      name={name}
      isSearchable
      isLoading={isLoading}
      options={data?.countries}
    />
  )
}

export default CountrySelect
