import Dropdown from 'components/common/form/Dropdown'

import { useGetSportsQuery } from 'app/services/sport/sport'

const SportSelect = ({ name }) => {
  const { data, isLoading } = useGetSportsQuery()

  return (
    <Dropdown
      label='Sport'
      placeholder='Select sport'
      name={name}
      isSearchable
      isLoading={isLoading}
      options={data?.sports}
    />
  )
}

export default SportSelect
