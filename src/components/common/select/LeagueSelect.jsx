import Dropdown from 'components/common/form/Dropdown'

import { useFormContext } from 'react-hook-form'

import { useGetLeaguesQuery } from 'app/services/sport/leagues'

const LeagueSelect = ({ name }) => {
  const { watch } = useFormContext()
  const { data, isLoading } = useGetLeaguesQuery()

  return (
    <Dropdown
      label='League'
      placeholder='Select league'
      name={name}
      isSearchable
      isLoading={isLoading}
      options={data?.leagues.filter(
        league =>
          league.sport.id === watch('sport_id') &&
          league.country.id === watch('country_id')
      )}
    />
  )
}

export default LeagueSelect
