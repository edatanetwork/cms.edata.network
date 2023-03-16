import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import {
  useGetCategoriesQuery,
  useGetApplicationsQuery
} from 'app/services/categories'

import { selectAllUsers } from 'features/users/usersApiSlice'

import * as Styled from 'components/styled/layout/Filterbar.styled'

const Filterbar = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const { data: categories, isLoading: isLoadingCategories } =
    useGetCategoriesQuery()
  const { data: applications, isLoading: isLoadingApplications } =
    useGetApplicationsQuery()
  const users = useSelector(selectAllUsers)

  const subcategories = categories
    ?.filter(category => category.subcategories)
    .map(category => category.subcategories)
    .flat()
    .filter(subcategory => subcategory.posts_number > 0)

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

  const handleDate = e => {
    if (e.target.value === '') {
      searchParams.delete(e.target.name)
      const prev = Object.fromEntries(searchParams)
      setSearchParams(prev)
    } else {
      const value = new Date(e.target.value).toLocaleDateString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      })
      const prev = Object.fromEntries(searchParams)
      setSearchParams({ ...prev, [e.target.name]: value })
    }
  }

  return (
    <Styled.Filterbar columns='repeat(6, 1fr)'>
      <Styled.Dropdown
        unstyled
        isLoading={isLoadingCategories}
        options={categories?.filter(
          category => category.subcategories && category.posts_number > 0
        )}
        classNamePrefix='select'
        formatOptionLabel={option => option.title}
        onChange={option =>
          handleChange({ key: 'category', value: option ? option.id : null })
        }
        value={categories
          ?.filter(
            category => category.subcategories && category.posts_number > 0
          )
          .find(c => c.id === parseInt(searchParams.get('category')))}
        placeholder='Category'
        isSearchable={false}
        isClearable
      />
      <Styled.Dropdown
        unstyled
        isLoading={isLoadingCategories}
        options={subcategories}
        classNamePrefix='select'
        formatOptionLabel={option => option.title}
        value={subcategories?.find(
          c => c.id === parseInt(searchParams.get('subcategory'))
        )}
        onChange={option =>
          handleChange({ key: 'subcategory', value: option ? option.id : null })
        }
        placeholder='Subcategory'
        isSearchable={false}
        isClearable
      />
      <Styled.Dropdown
        unstyled
        options={applications}
        isLoading={isLoadingApplications}
        classNamePrefix='select'
        formatOptionLabel={option => option.name}
        value={applications?.find(
          c => c.id === parseInt(searchParams.get('application'))
        )}
        onChange={option =>
          handleChange({ key: 'application', value: option ? option.id : null })
        }
        placeholder='Application'
        isSearchable={false}
        isClearable
      />
      <Styled.Dropdown
        unstyled
        options={users}
        classNamePrefix='select'
        formatOptionLabel={option => option.username}
        value={users?.find(c => c.id === parseInt(searchParams.get('author')))}
        onChange={option =>
          handleChange({ key: 'author', value: option ? option.id : null })
        }
        placeholder='Author'
        isSearchable={false}
        isClearable
      />
      <div>
        <input type='date' name='from_date' onChange={handleDate} />
      </div>
      <div>
        <input type='date' name='to_date' onChange={handleDate} />
      </div>
    </Styled.Filterbar>
  )
}

export default Filterbar
