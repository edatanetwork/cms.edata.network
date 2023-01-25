import { useSearchParams } from 'react-router-dom'

import { useGetCountriesQuery } from 'app/common/countries'
import { useGetTvGenresQuery } from 'app/services/tv/genre'
import { useGetUsersQuery } from 'app/services/users'

import * as F from 'components/styled/layout/Filterbar.styled'

const Filterbar = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const { data: genres, isLoading: loadingGenres } = useGetTvGenresQuery()
  const { data: countries, isLoading: loadingCountries } =
    useGetCountriesQuery()
  const { data: users, isLoading: loadingUsers } = useGetUsersQuery()

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

  return (
    <F.Filterbar columns='repeat(4, 1fr)'>
      <F.Dropdown
        unstyled
        isClearable
        classNamePrefix='select'
        placeholder='Genre'
        options={genres}
        isLoading={loadingGenres}
        getOptionLabel={opt => opt.name}
        getOptionValue={opt => opt.id}
        value={genres?.find(opt => opt.name === searchParams.get('genre'))}
        onChange={opt =>
          handleChange({ key: 'genre', value: opt ? opt.name : null })
        }
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
        value={countries?.countries.find(
          opt => opt.name === searchParams.get('country')
        )}
        onChange={opt =>
          handleChange({ key: 'country', value: opt ? opt.name : null })
        }
      />
      <F.Dropdown
        unstyled
        isClearable
        classNamePrefix='select'
        placeholder='Status'
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
        isLoading={loadingUsers}
        getOptionLabel={opt => opt.username}
        getOptionValue={opt => opt.id}
        value={users?.find(opt => opt.name === searchParams.get('author'))}
        onChange={opt =>
          handleChange({ key: 'author', value: opt ? opt.username : null })
        }
      />
    </F.Filterbar>
  )
}

export default Filterbar

const statusOptions = [
  { label: 'Live', value: 'live' },
  { label: 'Coming soon', value: 'comingSoon' },
  { label: 'Finished', value: 'finished' },
  { label: 'No Links', value: 'No Links' }
]
