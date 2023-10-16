import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'

import { useGetSportsQuery } from 'app/services/sport/sport'
import { useGetCountriesQuery } from 'app/services/common/countries'
import { useGetLeaguesQuery } from 'app/services/sport/leagues'
import { selectAllUsers } from 'features/users/usersApiSlice'

import * as F from 'components/styled/layout/Filterbar.styled'

const Filterbar = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const { data: sports, isLoading: loadingSports } = useGetSportsQuery()
  const { data: countries, isLoading: loadingCountries } =
    useGetCountriesQuery()
  const { data: leagues, isLoading: loadingLeagues } = useGetLeaguesQuery()
  const users = useSelector(state => selectAllUsers(state))

  const handleChange = ({ key, value }) => {
    if (value === null) {
      searchParams.delete(key)
      const prev = Object.fromEntries(searchParams)
      setSearchParams(() => ({ ...prev }))
    } else {
      const prev = Object.fromEntries(searchParams)
      setSearchParams(() => ({ ...prev, [key]: value }))
    }
  }

  const sportId = Number(searchParams.get('sport_id'))
  const countryId = Number(searchParams.get('country_id'))
  const leagueId = Number(searchParams.get('league_id'))
  const authorId = Number(searchParams.get('author_id'))

  const sportDropdownValue = sports?.sports.find(opt => opt.id === sportId)
  const countryDropdownValue = countries?.countries.find(
    opt => opt.id === countryId
  )
  const leagueOptions = leagues?.leagues.filter(
    league => league.sport.id === sportId && league.country.id === countryId
  )
  const leagueValue = leagues?.leagues
    .filter(
      league => league.sport.id === sportId && league.country.id === countryId
    )
    .find(opt => opt.id === leagueId)

  return (
    <F.Filterbar columns='repeat(5, 1fr)'>
      <F.Dropdown
        unstyled
        isClearable
        classNamePrefix='select'
        placeholder='Sport'
        options={sports?.sports}
        isLoading={loadingSports}
        getOptionLabel={opt => opt.name}
        getOptionValue={opt => opt.id}
        value={sportDropdownValue}
        onChange={opt => {
          handleChange({ key: 'sport_id', value: opt ? opt.id : null })
          if (!opt) {
            handleChange({ key: 'league_id', value: null })
          }
        }}
      />
      <F.Dropdown
        unstyled
        isClearable
        classNamePrefix='select'
        placeholder='Country'
        options={countries?.countries}
        isLoading={loadingCountries}
        getOptionLabel={opt => opt.name}
        getOptionValue={opt => opt.id}
        value={countryDropdownValue}
        onChange={opt => {
          handleChange({ key: 'country_id', value: opt ? opt.id : null })

          if (!opt) {
            handleChange({ key: 'league_id', value: null })
          }
        }}
      />
      <F.Dropdown
        unstyled
        isClearable
        classNamePrefix='select'
        placeholder='League'
        isLoading={loadingLeagues}
        value={leagueValue}
        options={leagueOptions}
        getOptionLabel={opt => opt.name}
        getOptionValue={opt => opt.id}
        onChange={opt =>
          handleChange({ key: 'league_id', value: opt ? opt.id : null })
        }
      />
      <F.Dropdown
        unstyled
        isClearable
        classNamePrefix='select'
        placeholder='Status'
        getOptionLabel={opt => (
          <>
            <Status aria-hidden='true' color={opt.color} />
            {opt.label}
          </>
        )}
        options={statusOptions}
        value={statusOptions.find(
          opt => opt.value === searchParams.get('status')
        )}
        onChange={opt =>
          handleChange({ key: 'status', value: opt ? opt.value : null })
        }
      />
      <F.Dropdown
        unstyled
        isClearable
        classNamePrefix='select'
        placeholder='Author'
        options={users}
        getOptionLabel={opt => opt.username}
        getOptionValue={opt => opt.id}
        value={users?.find(opt => opt.id === authorId)}
        onChange={opt =>
          handleChange({ key: 'author_id', value: opt ? opt.id : null })
        }
      />
    </F.Filterbar>
  )
}

export default Filterbar

const statusOptions = [
  { label: 'Live', value: 'live', color: '#4DB500' },
  { label: 'Coming soon', value: 'comingSoon', color: '#0066FF' },
  { label: 'Finished', value: 'finished', color: '#939393' },
  { label: 'No Links', value: 'No Links', color: '#FF6200' }
]

export const Status = styled.span`
  width: 8px;
  height: 8px;
  background-color: ${props => props.color};
  border-radius: 50%;
  margin-right: 0.5rem;
`
